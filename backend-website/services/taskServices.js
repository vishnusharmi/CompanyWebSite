const Tasks = require('../models/taskModel');


exports.saveTask = async (data) => {
   try {
    const savedTask =  await Tasks.create(data);
    return savedTask;
   } catch (error) {
    console.log(error);
   }
}

exports.getTasks = async () => {
   try {
    const allTasks = await Tasks.findAll();
    return allTasks
   } catch (error) {
    console.log(error);
    
   }
}


exports.getSingleTask = async (id) => {
    try {
        const singleTask = await Tasks.findByPk(id);
        if(!singleTask){
            return 'Task not found'
        }
        return singleTask;

    } catch (error) {
        console.log(error);
        
    }
}



exports.updateTask = async (id) => {
    try {
        const updateTask = await Tasks.findByPk(id)
       
        if (!updateTask) {
            return res.status(404).json({ error: 'Task not found' }); 
        }

        const updatedTask = await updateTask.update();
        return updatedTask
        
    } catch (error) {
        console.log(error);
        
    }
};


exports.deleteTask = async (id) => {
    try {
        const deleteSingleTask = await Tasks.findByPk(id);
        const deletedTask =  await deleteSingleTask.destroy();
       return deletedTask
        
    } catch (error) {
        console.log(error);
        
    }
}