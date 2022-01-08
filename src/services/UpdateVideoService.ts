import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
    id: string;
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class UpdateVideoService {
    async execute({ id, name, description, duration, category_id }: VideoRequest): Promise<Video | Error> {
        const repo = getRepository(Video);

        const video = await repo.findOne(id);

        if (!video) {
            return new Error("Video does not exists.");
        }

        const repoCategory = getRepository(Category);

        if (category_id && (!await repoCategory.findOne(category_id))) {
            return new Error("Category does not exist.");
        }

        video.name = name ? name : video.name;
        video.description = description ? description : video.description;
        video.duration = duration ? duration : video.duration;
        video.category_id = category_id ? category_id : video.category_id;

        await repo.save(video);

        return video;
    }
}