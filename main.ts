namespace progressLoadingAnimation{

//% blockId=progressLoadingAnim
//% block="progressLoadingBar baslangicSirasi=$BaslangicSira, LedSayisi=$ledSayisi, Durum=$durum"
//% ledSayisi.defl=3  baslangicSira.defl=1
//% durum.defl=true
//% ledSayisi.min=1  ledSayisi.max=5
//% baslangicSira.min=0 baslangicSira.max=4
//% color="#FF5733"
export function ProgressBar (baslangicSira: number, ledSayisi: number, durum: boolean): void 
{
    if (durum) {
        for (let satir = 0; satir <= 4; satir++) {
            for (let sutun = 0; sutun <= ledSayisi - 1; sutun++) {
                led.plot(satir, sutun + baslangicSira)
                for (let index = 0; index <= 50; index++) {
                    led.setBrightness(index * 4 + 55)
                    basic.pause(10)
                }
                led.setBrightness(55)
            }
        }
        for (let index2 = 0; index2 <= 4; index2++) {
            led.enable(false)
            basic.pause(100)
            led.enable(true)
            basic.pause(100)
        }
        led.setBrightness(255)
        basic.pause(500)
        basic.clearScreen()
    }
}
basic.forever(function () {
    ProgressBar(1, 2, true)
})
}
