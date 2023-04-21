import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  id:{
    type: Schema.Types.Number,
    required:true
  },
  active:{
    type: Schema.Types.Boolean,
    required: true,
  }
});

const Project = model("Project", projectSchema);

export default Project;
