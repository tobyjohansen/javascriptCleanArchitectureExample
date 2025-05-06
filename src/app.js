const app = require("./infrastructure/frameworks/express");

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));