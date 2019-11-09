"use strict";

const knex = require("../../config/db");

const getModules = async params => {
  return {};
};

const getModuleById = async moduleId => {
  return {};
};

const editModule = async (moduleId, updatedModule) => {
  return knex("modules")
    .where({ id: moduleId })
    .update({
      title: updatedModule.title,
      start_date: updatedModule.start_date,
      end_date: updatedModule.end_date,
      class_id: updatedModule.class_id
    });
};

const deleteModule = async (modulesId, req) => {
  return knex("modules")
    .where({ id: modulesId })
    .del();
};

const createModule = async body => {
  const [moduleId] = await knex("modules").insert({
    title: body.title,
    start_date: body.start_date,
    end_date: body.end_date,
    class_id: body.class_id
  });

  return {
    successful: true
  };
};

module.exports = {
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule
};
