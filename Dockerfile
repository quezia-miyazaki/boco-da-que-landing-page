# Use a imagem oficial do Node.js como base
FROM node:20

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json (se existir)
# Isso permite que o Docker utilize o cache para o npm install, tornando o build mais rápido
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação Node.js usa
EXPOSE 3000

# Comando para rodar a aplicação quando o contêiner iniciar
CMD [ "node", "server.js" ]