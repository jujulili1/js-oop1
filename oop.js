class BangunDatar {
    constructor(luas, keliling) {
        this.luas = luas;
        this.keliling = keliling;
    }

    persegi(sisi) {
        this.luas = sisi * sisi;
        this.keliling = 4 * sisi;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    persegiPanjang(panjang, lebar) {
        this.luas = panjang * lebar;
        this.keliling = 2 * (panjang + lebar);
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    segitigaSiku2(alas, tinggi) {
        this.luas = (1 / 2) * alas * tinggi;
        this.keliling = alas + tinggi + sqrt(2 * alas + 2 * tinggi);
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }

    lingkaran(jari) {
        this.luas = Math.PI * jari * jari;
        this.keliling = 2 * Math.PI * jari;
        return `Luas = ${this.luas}, Keliling = ${this.keliling}`;
    }
}