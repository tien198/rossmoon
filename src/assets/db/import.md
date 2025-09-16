
###
mongoimport --uri="mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="categories" --file rossmoon.categories.json  --jsonArray

###
mongoimport --uri="mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="collections" --file rossmoon.collections.json  --jsonArray

###
mongoimport --uri="mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="products" --file rossmoon.products.json  --jsonArray

###
mongoimport --uri="mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.9" --collection="magazineFeatures" --file magazineFeatures.json  --jsonArray
