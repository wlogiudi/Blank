import parse from "./parser.js"

try {
  parse("print 1;")
  console.log("Syntax ok")
} catch (e) {
  // log error message in red
  console.error("\x1b[31m%s\x1b[0m", e.message)
  process.exit(1)
}
