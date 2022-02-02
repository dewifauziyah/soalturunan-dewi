class orang {
    constructor (nama, umur, sekolah, jurusan){
        this.nama = nama;
        this.umur = umur;
        this.sekolah = sekolah;
        this.jurusan = jurusan;
    }

    run() {
        return this.nama + "umur saya " + this.umur + " sekolah di " + this.sekolah + " jurusan " + this.jurusan
    }
}

class saya extends orang {
    constructor (nama, umur, sekolah, jurusan, keahlian) {
        super(nama, umur, sekolah, jurusan);

        this.keahlian = keahlian;
    }

    job() {
        return `${this.run()} aku seorang  ${this.keahlian}`
    }
}

const pribadi = new saya ("dewi ", 17 ,"SMK YADIKA SOREANG", "RPL", "fhotografyh")
// const ok = new saya ("multitalent")
console.log (pribadi.job())
// // console.log (ok.job())
// console.log (pribadi.job())
