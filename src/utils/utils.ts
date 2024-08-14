// function getBbox(repository: Repository<Neighborhood>, id: number): Promise<any> {
//   const bbox = await this.neighborhoodRepository
//   .createQueryBuilder()
//   .select(['ST_AsGeoJSON(ST_Envelope(boundary)) AS bbox'])
//   .where('id = :id', { id })
//   .getRawOne();
// }