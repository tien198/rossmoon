db.getCollection('collections').aggregate(
  [
    { $match: { slug: 'phan-mat-lv-ombers' } },
    {
      $lookup: {
        from: 'magazineFeatures',
        localField: '_id',
        foreignField: 'collectionId',
        as: 'magazineFeatures'
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);