mongoimport --uri="mongodb://127.0.0.1:27017/rossmoon?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="categories" --file categories.json  --jsonArray


mongoimport --uri="mongodb://127.0.0.1:27017/rossmoon?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="collections" --file collections.json  --jsonArray


mongoimport --uri="mongodb://127.0.0.1:27017/rossmoon?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="products" --file products.json  --jsonArray


mongoimport --uri="mongodb://127.0.0.1:27017/rossmoon?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="magazineFeatures" --file magazineFeatures.json  --jsonArray
