#!/bin/sh
bash -c "pandoc --toc --fail-if-warnings -s index.md --listings -o index.html -A <(echo \"<footer><p>Last modified: <span lang=\\\"en-CN\\\" xml:lang=\\\"en-CN\\\">`TZ=':UTC-8' date '+%F %T %Z%z'` - Built with `pandoc --version | head -n 1`</span></p></footer>\")"
