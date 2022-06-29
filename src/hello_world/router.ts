import { Router } from "express";

const router = Router();
router.get("/", async (req, res) => {
    await res.json({
        hello: "world"
    })
});

export { router };