import model from "../models/model.js"

const addNotise = async (notise) => {
    await model.create({
        content: notise
    })
    console.log(notise);
};

const parseNotice = async () => {
    const result = await model.findOne({}).sort({ createdAt: -1 });
    return result;
}

export { parseNotice };
export default addNotise;