import { createServer } from "node:http";
import expressServ from "../../servers/expressServer.js";

const server = createServer(expressServ);
const port = 3000;
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', (err) => {
    console.log('ERR:', err);
});
server.on('listening', () => {
    console.log(`listen hhtp server ${port}`);
});

