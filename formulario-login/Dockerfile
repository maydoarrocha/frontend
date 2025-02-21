# Use uma imagem oficial do Node.js como base
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do projeto para dentro do contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta em que a aplicação estará rodando
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]

