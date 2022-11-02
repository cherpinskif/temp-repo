const os = require('os')

//informação sobre o usuário atual
const usuario = os.userInfo()
console.log(usuario);

//Metodo retorna o tempo de sistema

console.log(`O sistema está operando há: ${os.uptime} segundos`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);

