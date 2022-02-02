class jati {
    constructor (nama, hobby, kegiatan){
        this.nama = nama;
        this.hobby = hobby;
        this.kegiatan = kegiatan;
    }

    run() {
        return this.nama + "hobby saya " + this.hobby + " kegiatan sehari-hari saya " + this.kegiatan
    }
}

class diri extends jati {
    constructor (nama, hobby, kegiatan, alatmusik) {
        super(nama, hobby, kegiatan);

        this.alatmusik = alatmusik;
    }

    job() {
        return `${this.run()} alat musik yang sering dimainin  ${this.alatmusik}`
    }
}

const pribadi = new diri ("nama saya dewi ","ngemil", "sekolah", "darbuka")
// const ok = new saya ("multitalent")
console.log (pribadi.job())
// // console.log (ok.job())
// console.log (pribadi.job())
