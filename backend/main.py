from database import criar_tabelas
from fastapi import FastAPI

app = FastAPI(
    title="EcoTech Class API",
    description="API da plataforma EcoTech Class",
    version="1.0.0"
)

criar_tabelas()

@app.get("/")
def inicio():
    return {
        "mensagem": "Bem-vindo à API do EcoTech Class!"
    }
