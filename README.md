
> Open this page at [https://umitugurlu.github.io/progressbar-extension/](https://umitugurlu.github.io/progressbar-extension/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/umitugurlu/progressbar-extension** and import

## Edit this project ![Build status badge](https://github.com/umitugurlu/progressbar-extension/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/umitugurlu/progressbar-extension** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/umitugurlu/progressbar-extension/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>


//% color="#9C27B0" weight=100 icon="\uf110"
namespace progressLoadingAnimation{

//% blockId=progressLoadingAnim
//% block="progressLoadingBar BaslangicSirasi=$BaslangicSira,LedSayisi=$ledSayisi, Durum=$durum"
//% ledSayisi.defl=3, BaslangicSira.defl=1
//% durum.defl=true
//% ledSayisi.min=1, ledSayisi.max=5
//% BaslangicSira.min=0 BaslangicSira.max=4
//% color="#FF5733"
export function ProgressBar (BaslangicSira: number, ledSayisi: number, durum: boolean): void 
{
    if (durum) {
        for (let satir = 0; satir <= 4; satir++) {
            for (let sutun = 0; sutun <= ledSayisi - 1; sutun++) {
                led.plot(satir, sutun + BaslangicSira)
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