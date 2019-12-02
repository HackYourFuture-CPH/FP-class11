/**
 * This function will paginate a Knex DB call based on a set of options.
 *
 * @param {Object} knex A Knex Promise object
 * @param {Object} options An object containing pagination options:
 *  limit: Max amount of objects to fetch.
 *  offset: Offset the range of objects fetched by a value
 *  orderBy: Chose what column to order records by.
 *  order: Sort either ascending "asc" or descending "desc"
 */
const paginate = (knex, { limit = 50, offset = 0, orderBy, order = "asc" }) => {
  return knex
    .limit(limit)
    .offset(offset)
    .orderBy(orderBy, order);
};

/**
 * Given a query parameter object this function will parse any values into the
 * expected types for pagination.
 *
 * @param {Object} query All url query parameters
 */
const getOptions = query => {
  if (query.limit) {
    query[limit] = parseInt(query.limit, 10);
  }
  if (query.offset) {
    query[offset] = parseInt(query.offset, 10);
  }
  if (query.order) {
    query[order] = parseInt(query.order, 10);
  }

  return query;
};

module.exports = {
  paginate,
  getOptions
};
