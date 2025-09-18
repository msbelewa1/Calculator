let validResults = [];
        
        // Start main table
        document.write("<table>");
        document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
        
        // Main calculator loop
        while (true) {
            let x = prompt("Enter first number:");
            if (x === null) break;
            
            let operator = prompt("Enter operator (+, -, *, /, %):");
            if (operator === null) break;
            
            let y = prompt("Enter second number:");
            if (y === null) break;
            
            let result;
            let xNum = parseFloat(x);
            let yNum = parseFloat(y);
            
            // Check for errors and calculate
            if (isNaN(xNum) || isNaN(yNum)) {
                result = '<span class="error">wrong input number</span>';
            } else if (!['+', '-', '*', '/', '%'].includes(operator)) {
                result = '<span class="error">computation error</span>';
            } else if ((operator === '/' || operator === '%') && yNum === 0) {
                result = '<span class="error">computation error</span>';
            } else {
                // Valid calculation
                if (operator === '+') result = xNum + yNum;
                else if (operator === '-') result = xNum - yNum;
                else if (operator === '*') result = xNum * yNum;
                else if (operator === '/') result = xNum / yNum;
                else if (operator === '%') result = xNum % yNum;
                
                validResults.push(result);
            }
            
            // Add row to table
            document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        }
        
        // Close main table
        document.write("</table>");
        
        // Summary table
        if (validResults.length > 0) {
            let min = Math.min(...validResults);
            let max = Math.max(...validResults);
            let total = validResults.reduce((a, b) => a + b, 0);
            let avg = total / validResults.length;
            
            document.write("<h2>Summary</h2>");
            document.write("<table>");
            document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
            document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
            document.write("</table>");
        } else {
            document.write("<p>No valid calculations performed.</p>");
        }