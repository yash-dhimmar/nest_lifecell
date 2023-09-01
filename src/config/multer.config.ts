import { diskStorage } from "multer";
import { extname, join } from "path";
export const multerConfig = {
  storage: diskStorage({
    destination: join(__dirname, "./../..", "public"),
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileExtension = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
    },
  }),
};