const SerialPort = require("serialport");

async function main() {
  const list = await SerialPort.list();

  for (const port of list) {
    console.log(port);
  }
}

main();
