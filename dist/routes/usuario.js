"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("./../controllers/usuarios");
const usuarios_2 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', usuarios_2.getUsuario);
router.post('/', usuarios_2.postUsuario);
router.put('/:id', usuarios_2.putUsuario);
router.delete('/:id', usuarios_2.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map