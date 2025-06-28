# interactive-calendar
(BR) Calendar and planner desktop app built with Electron, HTML, and CSS for organizing events and tasks.

## Como executar o app localmente

Para rodar este projeto no seu computador, siga os passos abaixo:

### 1. Instale o Node.js e npm

O Electron depende do Node.js, que inclui o npm (gerenciador de pacotes).  
Baixe e instale a versão mais recente em: [https://nodejs.org](https://nodejs.org)

### 2. Inicialize o projeto

No terminal, crie uma pasta para o projeto e execute:

```
npm init -y
```

Isso cria o arquivo package.json.

### 3. Instale o Electron
Execute o comando para instalar o Electron como dependência de desenvolvimento:

```
npm install electron --save-dev
```

### 4. Configure o arquivo principal
Crie o arquivo principal (main.js ou index.js) com o código para iniciar a janela do Electron. Por exemplo:

```
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```
### 5. Ajuste o script de inicialização
No package.json, adicione o script para rodar o app:

```
"scripts": {
  "start": "electron ."
}
```

### 6. Execute o aplicativo
No terminal, execute:

```
npm start
```

#### O Electron abrirá a janela do seu aplicativo.

Observações
Dependendo do seu sistema operacional, pode ser necessário ajustar permissões ou configurar firewall/antivírus para permitir o funcionamento do Electron.
