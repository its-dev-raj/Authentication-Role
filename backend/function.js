function check() {
  throw new Error("param required");
}

function show(name = check()) {
  console.log(name);
}

show();
