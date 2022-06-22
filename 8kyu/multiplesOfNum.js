const findMultiples = (integer, limit) => Array.from(Array(Math.floor(limit / integer)).keys(), num => (num + 1) * integer);
