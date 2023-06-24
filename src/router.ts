import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { getProducts } from "./handlers/product";

const router = Router();
/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional().isString(),
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/update/:id",
  body("title").optional().isString(),
  body("body").optional().isString(),
  oneOf([
    body("status").equals("IN_PROGRESS"),
    body("status").equals("SHIPPED"),
    body("status").equals("DEPRECATED"),
  ]),
  body("version").optional().isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
