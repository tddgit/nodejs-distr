import { open } from 'fs/promises';

let filehandle;

try {
    filehandle = await open('filehandle.mjs', 'r');

    console.log("-> filehandle", filehandle.toString());
}catch (err) {
    console.log("-> err", err);

} finally {
    await filehandle?.close();
}
