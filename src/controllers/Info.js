const os = require('os');
const numCPUs = os.cpus().length;

class Info {

    getInfo(req, res) {

        // console.log(process.argv,
        //     process.platform,
        //     process.version,
        //     process.memoryUsage(),
        //     process.execPath,
        //     process.pid,
        //     process.cwd(),
        //     numCPUs
        // )

        res.render('info', {
            argumento: process.argv,
            plataforma: process.platform,
            version: process.version,
            memoria: process.memoryUsage(),
            path: process.execPath,
            proceso: process.pid,
            carpeta: process.cwd(),
            procesadores: numCPUs
        })
    }
}

module.exports = Info