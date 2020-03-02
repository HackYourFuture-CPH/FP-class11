const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getModules = async () => {
  try {
    return await knex('modules').select('modules.id', 'modules.title');
  } catch (error) {
    return error.message;
  }
};

const getModuleById = async (id) => {
  try {
    const modules = await knex('modules')
      .select('modules.id as id', 'title')
      .where({ id });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

const editModule = async (moduleId, updatedModule) => {
  return knex('modules')
    .where({ id: moduleId })
    .update({
      title: updatedModule.title,
      startdate: updatedModule.start_date,
      enddate: updatedModule.end_date,
      classid: updatedModule.class_id,
    });
};

const deleteModule = async (modulesId) => {
  return knex('modules')
    .where({ id: modulesId })
    .del();
};

const createModule = async (body) => {
  await knex('modules').insert({
    title: body.title,
    startdate: body.start_date,
    enddate: body.end_date,
    classid: body.class_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule,
};
