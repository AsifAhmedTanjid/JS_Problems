const pingpongPrinter = () => {
    let output = [];

    for (let count = 1; count <= 20; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("PingPong");
        } else if (count % 3 === 0) {
            output.push("Ping");
        } else if (count % 5 === 0) {
            output.push("Pong");
        } else {
            output.push(count);
        }
    }

    console.log(output.join(", "));
}

pingpongPrinter();
