---
title: sgalal
lang: en-UK
dir: ltr
css:
  - https://cdn.jsdelivr.net/gh/sugina-dev/latin-modern-web@1.0.1/style/latinmodern-mono.css
  - https://cdn.jsdelivr.net/gh/sugina-dev/latin-modern-web@1.0.1/style/latinmodern-roman.css
  - https://cdn.jsdelivr.net/gh/nushu-script/font-unicode-nushu@1.0.0/index.css
math: |-
  <style>
    :lang(zh) { font-family: 'Noto Serif CJK SC', serif, serif; }
    :lang(zh-HK) { font-family: 'Noto Serif CJK KR', serif, serif; }
    :lang(zh-Nshu) { font-family: 'Unicode Nushu', serif, serif; }
    pre { font-family: 'Latin Modern Mono', monospace, monospace, monospace; line-height: 1; }
    body { font-family: 'Latin Modern Roman', system-ui, sans-serif, sans-serif; }
    #TOC, #title-block-header { display: none; }
    #avatar {
      border: 1px solid #777;
      border-radius: 5em;
      width: 8em;
      max-width: 6em;
    }
    .my-header > * {
      vertical-align: middle;
      display: inline-block;
    }
    .my-header > h1 {
      font-size: 2.5em;
      margin-top: 0;
      line-height: 1.2;
    }
    .my-header2 > p { margin-top: 0; font-size: 105%; }
    body { margin: 0 auto; padding: 0 1em; }
    @media screen and (min-width: 1024px) {
      body { padding: 0 4em; }
    }
  </style>
---

:::{.my-header}
![](index-photo.jpg){#avatar}&nbsp;&nbsp;

# sgalal
:::

:::{.my-header2}
_**Dedicated NLP Developer**_
:::

---

# My Works

## Cantonese

I am a developer in the Cantonese Computational Linguistics Infrastructure Development Workgroup (CanCLID).

I have been developing the open-source projects [rime-cantonese](https://github.com/rime/rime-cantonese) input method and [ToJyutping](https://github.com/CanCLID/ToJyutping).

ToJyutping is a Python library for labeling Cantonese texts by the Cantonese pronunciation.

## Nushu

I am the creator of The Nushu Coder’s Group on GitHub.

Nushu ([𛆁𛈬]{lang=zh-Nshu}) is a mysterious script used exclusively among women in Jiangyong County of Southern China. 

I created the [Online Nushu Dictionary](https://nushuscript.org/) website. The website is honored as “the Sacred Treasure for Nushu Translation” ([𛆁𛈬𛆌𛅰𛋙𛇬]{lang=zh-Nshu}) by Nushu researchers and learners.

## Chinese Characters

[Open Chinese Convert](https://github.com/BYVoid/OpenCC) (OpenCC) is one of the most popular open-source project for conversions between Traditional Chinese, Simplified Chinese and Japanese _Shinjitai_.

As one of the maintainers, I am devoted in compiling the materials of variant Characters.

## Middle Chinese

[Middle Chinese](https://en.wikipedia.org/wiki/Middle_Chinese) (aka. the _Qieyun_ System,[《切韻》音系]{lang=zh-HK}) is the ancient Chinese language recorded around 601 AD.

I am the creator of the [qieyun-js](https://github.com/nk2028/qieyun-js) project. It is a JavaScript library for the _Qieyun_ system, which enables users to explore the system and derive modern Chinese dialects from the ancestral form.

I am also a contributor of [YonhTenxMyangx](https://ytenx.org/) (literally, rhyme dictionary website). The website collects several important ancient Chinese rhyme books.

# My Projects

## Knight's Tour Visualization

[Knight's Tour Visualization](https://sgalal.github.io/knights-tour-visualization/) is an online Knight's tour visualizer, implemented in C and then compiled to JavaScript by Emscripten.

## oslab

[oslab](https://sgalal.github.io/oslab/) contains my experiments of the Operating System course. The experiments are done by multiple programming languages with different programming paradigms.

## TinyPE on Windows 10

[TinyPE on Windows 10](https://github.com/sgalal/TinyPE-on-Win10) is possibly the minimal 64-bit [Portable Executable](https://en.wikipedia.org/wiki/Portable_Executable) (PE) file that displays a message box on Windows 10.

```sh
$ xxd stretch.exe
00000000: 4d5a 0000 5045 0000 6486 0100 4d65 7373  MZ..PE..d...Mess
00000010: 6167 6542 6f78 5700 8000 2200 0b02 0000  ageBoxW...".....
00000020: 0201 0000 ff25 6a00 0000 0000 fc00 0000  .....%j.........
00000030: 0a00 0000 0000 0040 0100 0000 0400 0000  .......@........
00000040: 0400 0000 488d 52b8 ebda 0000 0600 0000  ....H.R.........
00000050: 0000 0000 0c01 0000 c400 0000 0000 0000  ................
00000060: 0200 6081 0000 1000 0000 0000 0010 0000  ..`.............
00000070: 0000 0000 0000 1000 0000 0000 5553 4552  ............USER
00000080: 3332 2e64 6c6c 0000 0200 0000 41b9 4000  32.dll......A.@.
00000090: 2400 ebb0 f400 0000 1800 0000 2e00 4c8d  $.............L.
000000a0: 42c8 ebe8 0201 0000 9400 0000 0201 0000  B...............
000000b0: 9400 0000 4100 4200 4300 4400 4500 4600  ....A.B.C.D.E.F.
000000c0: 4700 0000 3dd8 afdc 2000 5400 6900 6e00  G...=... .T.i.n.
000000d0: 7900 5000 4500 2000 6f00 6e00 2000 5700  y.P.E. .o.n. .W.
000000e0: 6900 6e00 6400 6f00 7700 7300 2000 3100  i.n.d.o.w.s. .1.
000000f0: 3000 0000 0801 0000 0000 0000 31c9 eb9e  0...........1...
00000100: 7c00 0000 9400 0000 0a00 0000            |...........
```

## Rensyuugi

[Rensyuugi](https://sgalal.github.io/rensyuugi/) is an online CJK word-reciting tool. Currently it supports [_Kun'yomi_](https://en.wikipedia.org/wiki/Kanji#Kun'yomi_(native_reading)), [Hanja-eo](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary) and [Cantonese](https://en.wikipedia.org/wiki/Cantonese).

## Other Projects

Checkout my other projects on [GitHub](https://github.com/sgalal)!

---
