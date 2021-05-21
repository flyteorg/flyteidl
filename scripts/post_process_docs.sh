#!/bin/bash
LINK_TO_FILE_PATH=`grep -r "a name=\"flyteidl" --include "*.html" . | sed 's/.*docs\/\([^:]*\).*a name="\([^"]*\).*/\2=..\/\1/'`

echo "Fixing links in html files"
#use the link to file path map to fix the link with correct paths
SEDOPTION="-i"
if [[ "$OSTYPE" == "darwin"* ]]; then
  SEDOPTION="-i ''"
fi

for LINK_TO_FILE_ENTRY in $LINK_TO_FILE_PATH
do
  LINK=$(echo $LINK_TO_FILE_ENTRY | cut -f1 -d"=")
  ESCAPED_LINK=`echo $LINK|sed 's/\\//\\\\\//g'`
  FILE_PATH=$(echo $LINK_TO_FILE_ENTRY | cut -f2 -d"=")
  ESCAPED_FILE_PATH=`echo $FILE_PATH|sed 's/\\//\\\\\//g'`
  find . -name "*.html" -exec sed $SEDOPTION "s/href=\"#$ESCAPED_LINK\"/href=\"$ESCAPED_FILE_PATH#$ESCAPED_LINK\"/" {} \;
done
echo "Links fixed"
