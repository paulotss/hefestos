import multer, { Multer } from 'multer';
import multerS3 from 'multer-s3';
import { extname } from 'path';
import { S3Client } from '@aws-sdk/client-s3';

class MulterStorage {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  private multerLocal() {
    const storage = multer.diskStorage({
      destination: (req, res, cb) => {
        cb(null, 'src/media');
      },
      filename: function(_req, file, cb) {
        cb(null, Date.now() + extname(file.originalname))
      }
    });
    return storage;
  }

  private multerAWS3() {
    const storage = multerS3({
      s3: new S3Client({
        region: process.env.AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
        }
      }),
      bucket: process.env.AWS_S3_BUCKET || '',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      key: (_req, file, cb) => {
        const key = Date.now() + extname(file.originalname);
        file.filename = key;
        cb(null, key);
      },
    });
    return storage;
  }

  public multerConfig() {
    const config = {
      dest: 'src/media',
      storage: this.type === "local" ? this.multerLocal() : this.multerAWS3(),
    }
    return config;
  }
}

export default MulterStorage;
