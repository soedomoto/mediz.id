#!/bin/sh

printenv

until (/usr/bin/mc config host add myminio http://s3-dev:9000 ${MINIO_ACCESS_KEY} ${MINIO_SECRET_KEY}) do echo '...waiting...' && sleep 1; done;
/usr/bin/mc mb myminio/${MINIO_BUCKET};
/usr/bin/mc policy set public myminio/${MINIO_BUCKET};
exit 0;
