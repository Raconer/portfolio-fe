export interface Info {
    id:number|null,
    thumbnailPath:String|null,
    companyName:String,
    title:String,
    desc:String,
    skillTagList:Array<SkillTag>
}

interface SkillTag{
    id:number,
    text:String
}