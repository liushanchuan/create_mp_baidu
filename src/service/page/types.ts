/**
 * 定义轮播图显示的标志类型枚举。
 */
enum SlideFlag {
  /** 表示首页的轮播图 */
  Index = 'index',
  /** 表示置顶位置的轮播图 */
  Top = 'top',
  /** 表示热门推荐的轮播图 */
  Hot = 'hot',
  /** 表示系统推荐的轮播图 */
  Recommend = 'recommend',
  /** 表示广告类的轮播图 */
  Ad = 'ad',
  /** 表示默认分类的轮播图 */
  Default = 'default',
}

/**
 * 定义轮播图的标签枚举，用于进一步分类轮播图内容。
 */
export enum SlideTag {
  /** 用于标记首页的轮播图 */
  Index = 'index',
  // 更多标签可根据实际需求添加，例如：
}

/**
 * 轮播图接口，描述单个轮播图项的数据结构。
 */
export interface CarouselItem {
  /**
   * 轮播图的类型。
   * @enum {SlideFlag}
   */
  flag?: SlideFlag

  /**
   * 轮播图的标签，用于区分不同场景或分类。
   * @enum {SlideTag}
   */
  tag: SlideTag
}

/**
 * 详情接口参数定义
 */
export interface DetailQuery {
  /**
   * 用于查询的ID。
   * 必须是整数。
   */
  id: number
}

// 新增广告位置枚举
enum AdPosition {
  Middle = 'mid', // 中部广告
  // 可以根据需要添加更多广告位置类型，如顶部、底部等
}

// 定义广告接口
export interface AdItem {
  /**
   * 广告展示的场景或位置类型
   * 可选值：index(首页), top(置顶), hot(热门), recommend(推荐), ad(广告), default(默认)
   */
  flag: SlideFlag

  /**
   * 广告的具体位置标签
   * 示例值：mid(中部广告)
   */
  tag: AdPosition
}

// 定义协议类型枚举
export enum AgreementType {
  User = 'user', // 用户协议
  Policy = 'policy', // 隐私协议
}

// 定义排序方式枚举
enum SortType {
  Comprehensive = 1, // 综合
  MostViewed = 2, // 浏览最多
  LatestUpload = 3, // 最新上传
}

// 定义类型枚举
enum ContentType {
  Recommend = 'recommend', // 推荐
  Hot = 'hot', // 优选
}

// 定义搜索列表/内容列表请求参数接口
export interface SearchListRequest {
  /**
   * 分类ID
   */
  classtypeid?: number

  /**
   * 每页条数
   */
  limit?: number

  /**
   * 搜索名称
   */
  name?: string

  /**
   * 当前页数
   */
  page?: number

  /**
   * 排序
   * 可选值：1=综合, 2=浏览最多, 3=最新上传
   */
  sort?: SortType

  /**
   * 类型
   * 可选值：recommend=推荐, prime=优选
   */
  tag?: ContentType
}
