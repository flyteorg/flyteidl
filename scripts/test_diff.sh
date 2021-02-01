DIRTY=$(git status --porcelain)
if [ -n "$DIRTY" ]; then
  echo "FAILED: Protos updated without commiting generated code."
  echo "Ensure make generate has run and all changes are committed."
  DIFF=$(git diff)
  echo "diff detected: $DIFF"
  DIFF=$(git diff --name-only)
  echo "files different: $DIFF"
  exit 1
else
  echo "SUCCESS: Generated code is up to date."
fi
