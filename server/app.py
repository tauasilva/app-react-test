import logging
from typing import Annotated, Any
from fastapi import Depends, FastAPI
from pydantic import BaseModel, ValidationError
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.serving import (
    ChatMessage,
    ChatMessageRole,
)
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)
logger.info("Logger initialized successfully!")

load_dotenv()

# Ensure environment variable is set correctly
assert os.getenv('DATABRICKS_WAREHOUSE_ID'), "DATABRICKS_WAREHOUSE_ID must be set in app.yaml."

def sqlQuery(query: str) -> pd.DataFrame:
    """Execute a SQL query and return the result as a pandas DataFrame."""
    cfg = Config()  # Pull environment variables for auth
    with sql.connect(
        server_hostname=cfg.host,
        http_path=f"/sql/1.0/warehouses/{os.getenv('DATABRICKS_WAREHOUSE_ID')}",
        credentials_provider=lambda: cfg.authenticate
    ) as connection:
        with connection.cursor() as cursor:
            cursor.execute(query)
            return cursor.fetchall_arrow().to_pandas()




def ReturnIndicadores() -> pd.DataFrame:
    """Return KPIS """


    sql = '''
        select
        sum(vl_realizado) as faturado,
        sum(vl_meta) as meta,
        sum(case when ds_canal_faturado = 'Franquias' then vl_realizado else 0 end ) as franquias,
        sum(case when ds_canal_faturado = 'Loja Própria' then vl_realizado else 0 end ) as loja_propria,
        sum(case when ds_canal_faturado = 'Outlet' then vl_realizado else 0 end ) as outlet,
        sum(case when ds_canal_faturado = 'E-commerce' then vl_realizado else 0 end ) as ecommerce
        from
        sellout.refined.tb_fat_sellout_monitoria_dia_atual
        where dt_meta = current_date()
        group by all
    '''

    # Fetch the data
    try:
        # This example query depends on the nyctaxi data set in Unity Catalog, see https://docs.databricks.com/en/discover/databricks-datasets.html for details
        data = sqlQuery(sql)
        print(f"Data shape: {data.shape}")
        print(f"Data columns: {data.columns}")

        dados = data.to_dict(orient="records")
        
        return JSONResponse(content=dados)      

    except Exception as e:
        print(f"An error occurred in querying data: {str(e)}")
        return {"message": "ERROR"}


app = FastAPI()
ui_app = StaticFiles(directory="client/dist", html=True)
api_app = FastAPI()


@app.get("/dados")
def get_dados():
    # Converte o DataFrame para uma lista de dicionários (records)
    dados = df.to_dict(orient="records")
    return ReturnIndicadores()


# Endpoint simples adicionado à sub-aplicação de API
@api_app.get("/hello")
def read_hello():
    return {"message": "Hello, World!"}



# PLEASE NOTE THE ORDER OF THE MOUNTS MATTERS
app.mount("/", ui_app)
app.mount("/api", api_app)

origins = [
    "http://localhost:3000",
]



# client
def client():
    return WorkspaceClient()

