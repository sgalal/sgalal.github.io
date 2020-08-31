---
title: sgalal
lang: en-UK
dir: ltr
css:
  - https://cdn.jsdelivr.net/gh/sugina-dev/latin-modern-web@1.0.1/style/latinmodern-mono.css
  - https://cdn.jsdelivr.net/gh/sugina-dev/latin-modern-web@1.0.1/style/latinmodern-roman.css
  - https://cdn.jsdelivr.net/gh/nushu-script/font-unicode-nushu@1.0.0/index.css
  - https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap
math: |-
  <style>
    :lang(zh) { font-family: 'Noto Serif CJK SC', 'Noto Serif TC', serif, serif; }
    :lang(zh-HK) { font-family: 'Noto Serif CJK KR', 'Noto Serif TC', serif, serif; }
    :lang(zh-Nshu) { font-family: 'Unicode Nushu', serif, serif; font-size: 110%; }
    a { text-decoration: none; }
    pre { font-family: 'Latin Modern Mono', monospace, monospace, monospace; line-height: 1; }
    body { font-family: 'Latin Modern Roman', system-ui, sans-serif, sans-serif; }
    #TOC, #title-block-header { display: none; }
    #avatar {
      border: 1px solid #777;
      border-radius: 7em;
      width: 11em;
      max-width: 11em;
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
    .abc > h2 {
      margin-top: 0.5em;
    }
    /* Style 1 */
    /* body { color: #2b2b2b; } */
    /* Style 2 */
    body { background-color: #a5e1ff; }
    .abc {
      padding: 1em;
      margin: 1em 0;
      border-radius: 1em;
      background-color: #c9edff;
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

:::{.abc}
## Cantonese Projects

### What is Cantonese?

[Cantonese](https://en.wikipedia.org/wiki/Cantonese) is a language within the Chinese language family (or a dialect of the Chinese language) spoken by over 80 million people as their mother language. It is viewed as a vital and inseparable part of the cultural identity for its native speakers across large swaths of [Southeastern China](https://en.wikipedia.org/wiki/Liangguang), Hong Kong and Macau, as well as in overseas communities.

### What I am doing

I am a developer in the Cantonese Computational Linguistics Infrastructure Development Workgroup (CanCLID).

The projects I am working on include [rime-cantonese](https://github.com/rime/rime-cantonese) input method, and [ToJyutping](https://github.com/CanCLID/ToJyutping), a Python library for labeling Cantonese texts by the Cantonese pronunciation.

### Why are the projects important?

The Cantonese input method is important in the following aspects:

- Let Cantonese speakers to type Chinese characters with minimum difficulty
- Help Cantonese learners to speak the language more accurately
- Promote the standardization of the written form of Cantonese
- Provide an audited dictionary for downstream NLP tasks

ToJyutping is useful for Cantonese learners to learn the pronunciation of words.
:::

:::{.abc}
## Nushu Projects

### What is Nushu?

[Nushu](https://en.wikipedia.org/wiki/N%C3%BCshu) ([𛆁𛈬]{lang=zh-Nshu}, literally "women's script") is a mysterious script used exclusively among women in Jiangyong County of Southern China. A Nushu character contains solely four kinds of strokes – dotted, vertical, oblique and arcuate. Nushu is written on cotton books as wedding gifts, which are called “third day missives”, or fans, handkerchiefs and papers, which has become a unique art symbol. Women in the local areas used to do the needlework together, reading, singing and teaching Nushu, forming a special Nushu culture.

### What I am doing

Nushu is popular because the shapes of Nushu characters are elegant. People can use them to decorate their artworks, such as calligraphy, clothes and handbags. However, it was difficult to find the correct Nushu characters in the past. Therefore, I created the [Online Nushu Dictionary](https://nushuscript.org/) website for people to find, view and download Nushu characters freely.

The website provides the Nushu converter, which can convert Chinese characters to its corresponding Nushu characters, and a Nushu input method. The website is a comprehensive dictionary for Nushu, which is honored as “the Sacred Treasure for Nushu Translation” ([𛆁𛈬𛆌𛅰𛋙𛇬]{lang=zh-Nshu}) by Nushu researchers and learners.

### Why is the project important?

- It is the first Nushu dictionary online, which is easily accessible for people around the world
- The website has been a useful reference for Nushu researchers and learners
- Nushu is widely used in the design of artworks and fashion products today. The website has been a reference for the designers
- Nushu is included in the Unicode character set. The website can be a reference for projects related to Unicode (such as computer fonts)
:::

:::{.abc}
## Variant Chinese Characters

### What are variant Chinese characters?

[Variant Chinese characters](https://en.wikipedia.org/wiki/Variant_Chinese_character) are Chinese characters that are homophones and synonyms. They exist both synchronically and diachronically within and across all regions where Chinese characters are used, whether they are used in Chinese (such as those countries or regions: mainland China, Hong Kong, Macau, Taiwan, Singapore, Malaysia), Japanese (Japan), or Korean (North Korea, South Korea).

### What I am doing

I am a maintainer of the [Open Chinese Convert](https://github.com/BYVoid/OpenCC) (OpenCC) project. The project is one of the most popular open-source project for conversions between Traditional Chinese, Simplified Chinese and Japanese _Shinjitai_.

My work mainly includes the following aspects:

- Gathering information about what variant Chinese characters are used in different administrative regions
- Determine the semantic relationship between a variant Chinese character in ancient time and its modern form
- Developing a converter of variant Chinese characters under the framework of [Han unification](https://en.wikipedia.org/wiki/Han_unification) of Unicode

### Why is the project important?

There is a great demand for the conversions between variant Chinese characters. The number of GitHub stars (around 5k) tells everything.
:::

:::{.abc}
## Middle Chinese Projects

### What is Middle Chinese?

[Middle Chinese](https://en.wikipedia.org/wiki/Middle_Chinese) (aka. the _Qieyun_ System,[《切韻》音系]{lang=zh-HK}) is the ancient Chinese language recorded around 601 AD and followed by several revised and expanded editions. It is the most important subject of the Historical Chinese phonology research.

### What I am doing

I am the sole creator of the [qieyun-js](https://github.com/nk2028/qieyun-js) project. It is a JavaScript library for software development based on the _Qieyun_ system.

I am also a contributor of [YonhTenxMyangx](https://ytenx.org/) (literally "rhyme dictionary website"), which is a website that collects several important ancient Chinese rhyme books.

### Why are the projects important?

- Enable users to explore the _Qieyun_ system
- Make it possible to derive modern Chinese dialects from the ancestral form
- Inherit and develop the ancient Chinese culture
- Provide the infrastructure for the modern Historical Chinese phonology research
:::

# My Projects

:::{.abc}
## Knight's Tour Visualization

The project was completed during my sophomore.

[Knight's Tour Visualization](https://sgalal.github.io/knights-tour-visualization/) is an online Knight's tour visualizer, implemented in C and then compiled to JavaScript by Emscripten.

![](https://raw.githubusercontent.com/sgalal/knights-tour-visualization/master/demo/demo.gif){style="max-width: 400px"}
:::

:::{.abc}
## oslab

The project was completed during my sophomore.

[oslab](https://sgalal.github.io/oslab/) contains my experiments of the Operating System course. The experiments are done by multiple programming languages with different programming paradigms.
:::

:::{.abc}
## TinyPE on Windows 10

The project was completed during my junior.

[TinyPE on Windows 10](https://github.com/sgalal/TinyPE-on-Win10) is possibly the minimal 64-bit [Portable Executable](https://en.wikipedia.org/wiki/Portable_Executable) (PE) file that displays a message box on Windows 10. It is related to cyber security.

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

![](https://raw.githubusercontent.com/sgalal/TinyPE-on-Win10/master/index.files/tiny1.exe.png)
:::

:::{.abc}
## Rensyuugi

The project was completed during my junior.

[Rensyuugi](https://sgalal.github.io/rensyuugi/) is an online CJK word-reciting tool. Currently it supports [_Kun'yomi_](https://en.wikipedia.org/wiki/Kanji#Kun'yomi_(native_reading)), [Hanja-eo](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary) and [Cantonese](https://en.wikipedia.org/wiki/Cantonese).
:::

:::{.abc}
## Other Projects

If you are interested in my other projects, please visit my [GitHub](https://github.com/sgalal).
:::

---
