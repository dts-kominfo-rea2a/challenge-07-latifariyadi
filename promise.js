const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async(emosi) => {
    const arrIXX = await promiseTheaterIXX();
    const arrVGC = await promiseTheaterVGC();

    try {
        const perhitunganPertamaVGC = await penjumlahanEmosi(0, emosi, arrVGC[0]);
        const perhitunganKeduaVGC = await penjumlahanEmosi(
            perhitunganPertamaVGC,
            emosi,
            arrVGC[1]
        );
        const totalVGC = await penjumlahanEmosi(
            perhitunganKeduaVGC,
            emosi,
            arrVGC[2]
        );

        const perhitunganPertamaIXX = await penjumlahanEmosi(0, emosi, arrIXX[0]);
        const perhitunganKeduaIXX = await penjumlahanEmosi(
            perhitunganPertamaIXX,
            emosi,
            arrIXX[1]
        );
        const totalIXX = await penjumlahanEmosi(
            perhitunganKeduaIXX,
            emosi,
            arrIXX[2]
        );

        return totalIXX + totalVGC;
    } catch (error) {
        console.log(error);
    }
};

const penjumlahanEmosi = (nilaiAwal, emosi, arrBioskop) => {
    return new Promise((resolve, reject) => {
        if (arrBioskop.hasil !== null) {
            if (arrBioskop.hasil === emosi) {
                return resolve(nilaiAwal + 1);
            } else {
                return resolve(nilaiAwal);
            }
        } else {
            reject(`Data Error`);
        }
    });
};

module.exports = {
    promiseOutput,
};