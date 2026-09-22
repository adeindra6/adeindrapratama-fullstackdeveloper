
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JobSeekerProfile
 * 
 */
export type JobSeekerProfile = $Result.DefaultSelection<Prisma.$JobSeekerProfilePayload>
/**
 * Model CompanyProfile
 * 
 */
export type CompanyProfile = $Result.DefaultSelection<Prisma.$CompanyProfilePayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  JOB_SEEKER: 'JOB_SEEKER',
  COMPANY: 'COMPANY'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ApplicationStatus: {
  APPLIED: 'APPLIED',
  REVIEWING: 'REVIEWING',
  SHORTLISTED: 'SHORTLISTED',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSeekerProfile`: Exposes CRUD operations for the **JobSeekerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSeekerProfiles
    * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany()
    * ```
    */
  get jobSeekerProfile(): Prisma.JobSeekerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyProfile`: Exposes CRUD operations for the **CompanyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyProfiles
    * const companyProfiles = await prisma.companyProfile.findMany()
    * ```
    */
  get companyProfile(): Prisma.CompanyProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    JobSeekerProfile: 'JobSeekerProfile',
    CompanyProfile: 'CompanyProfile',
    JobPosting: 'JobPosting',
    JobApplication: 'JobApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "jobSeekerProfile" | "companyProfile" | "jobPosting" | "jobApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JobSeekerProfile: {
        payload: Prisma.$JobSeekerProfilePayload<ExtArgs>
        fields: Prisma.JobSeekerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSeekerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          findFirst: {
            args: Prisma.JobSeekerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSeekerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          findMany: {
            args: Prisma.JobSeekerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          create: {
            args: Prisma.JobSeekerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          createMany: {
            args: Prisma.JobSeekerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSeekerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          delete: {
            args: Prisma.JobSeekerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          update: {
            args: Prisma.JobSeekerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          deleteMany: {
            args: Prisma.JobSeekerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSeekerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>[]
          }
          upsert: {
            args: Prisma.JobSeekerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSeekerProfilePayload>
          }
          aggregate: {
            args: Prisma.JobSeekerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSeekerProfile>
          }
          groupBy: {
            args: Prisma.JobSeekerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSeekerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<JobSeekerProfileCountAggregateOutputType> | number
          }
        }
      }
      CompanyProfile: {
        payload: Prisma.$CompanyProfilePayload<ExtArgs>
        fields: Prisma.CompanyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findFirst: {
            args: Prisma.CompanyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findMany: {
            args: Prisma.CompanyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          create: {
            args: Prisma.CompanyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          createMany: {
            args: Prisma.CompanyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          delete: {
            args: Prisma.CompanyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          update: {
            args: Prisma.CompanyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          deleteMany: {
            args: Prisma.CompanyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          upsert: {
            args: Prisma.CompanyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          aggregate: {
            args: Prisma.CompanyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyProfile>
          }
          groupBy: {
            args: Prisma.CompanyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    jobSeekerProfile?: JobSeekerProfileOmit
    companyProfile?: CompanyProfileOmit
    jobPosting?: JobPostingOmit
    jobApplication?: JobApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JobSeekerProfileCountOutputType
   */

  export type JobSeekerProfileCountOutputType = {
    applications: number
  }

  export type JobSeekerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobSeekerProfileCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobSeekerProfileCountOutputType without action
   */
  export type JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfileCountOutputType
     */
    select?: JobSeekerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobSeekerProfileCountOutputType without action
   */
  export type JobSeekerProfileCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * Count Type CompanyProfileCountOutputType
   */

  export type CompanyProfileCountOutputType = {
    jobPosts: number
  }

  export type CompanyProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosts?: boolean | CompanyProfileCountOutputTypeCountJobPostsArgs
  }

  // Custom InputTypes
  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfileCountOutputType
     */
    select?: CompanyProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeCountJobPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
  }


  /**
   * Count Type JobPostingCountOutputType
   */

  export type JobPostingCountOutputType = {
    applications: number
  }

  export type JobPostingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobPostingCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostingCountOutputType
     */
    select?: JobPostingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPostingCountOutputType without action
   */
  export type JobPostingCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    jobSeekerProfile?: boolean | User$jobSeekerProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    jobSeekerProfile?: boolean | User$jobSeekerProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      companyProfile: Prisma.$CompanyProfilePayload<ExtArgs> | null
      jobSeekerProfile: Prisma.$JobSeekerProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companyProfile<T extends User$companyProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$companyProfileArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jobSeekerProfile<T extends User$jobSeekerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$jobSeekerProfileArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.companyProfile
   */
  export type User$companyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    where?: CompanyProfileWhereInput
  }

  /**
   * User.jobSeekerProfile
   */
  export type User$jobSeekerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    where?: JobSeekerProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JobSeekerProfile
   */

  export type AggregateJobSeekerProfile = {
    _count: JobSeekerProfileCountAggregateOutputType | null
    _avg: JobSeekerProfileAvgAggregateOutputType | null
    _sum: JobSeekerProfileSumAggregateOutputType | null
    _min: JobSeekerProfileMinAggregateOutputType | null
    _max: JobSeekerProfileMaxAggregateOutputType | null
  }

  export type JobSeekerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type JobSeekerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type JobSeekerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    jobTitle: string | null
    location: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobSeekerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    jobTitle: string | null
    location: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobSeekerProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    jobTitle: number
    location: number
    resumeUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobSeekerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type JobSeekerProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type JobSeekerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    jobTitle?: true
    location?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobSeekerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    jobTitle?: true
    location?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobSeekerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    jobTitle?: true
    location?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobSeekerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerProfile to aggregate.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSeekerProfiles
    **/
    _count?: true | JobSeekerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSeekerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSeekerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSeekerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSeekerProfileMaxAggregateInputType
  }

  export type GetJobSeekerProfileAggregateType<T extends JobSeekerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSeekerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSeekerProfile[P]>
      : GetScalarType<T[P], AggregateJobSeekerProfile[P]>
  }




  export type JobSeekerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSeekerProfileWhereInput
    orderBy?: JobSeekerProfileOrderByWithAggregationInput | JobSeekerProfileOrderByWithAggregationInput[]
    by: JobSeekerProfileScalarFieldEnum[] | JobSeekerProfileScalarFieldEnum
    having?: JobSeekerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSeekerProfileCountAggregateInputType | true
    _avg?: JobSeekerProfileAvgAggregateInputType
    _sum?: JobSeekerProfileSumAggregateInputType
    _min?: JobSeekerProfileMinAggregateInputType
    _max?: JobSeekerProfileMaxAggregateInputType
  }

  export type JobSeekerProfileGroupByOutputType = {
    id: number
    userId: number
    firstName: string
    lastName: string
    jobTitle: string | null
    location: string | null
    resumeUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobSeekerProfileCountAggregateOutputType | null
    _avg: JobSeekerProfileAvgAggregateOutputType | null
    _sum: JobSeekerProfileSumAggregateOutputType | null
    _min: JobSeekerProfileMinAggregateOutputType | null
    _max: JobSeekerProfileMaxAggregateOutputType | null
  }

  type GetJobSeekerProfileGroupByPayload<T extends JobSeekerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSeekerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSeekerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSeekerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], JobSeekerProfileGroupByOutputType[P]>
        }
      >
    >


  export type JobSeekerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTitle?: boolean
    location?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | JobSeekerProfile$applicationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTitle?: boolean
    location?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTitle?: boolean
    location?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSeekerProfile"]>

  export type JobSeekerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    jobTitle?: boolean
    location?: boolean
    resumeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobSeekerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "jobTitle" | "location" | "resumeUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["jobSeekerProfile"]>
  export type JobSeekerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobSeekerProfile$applicationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | JobSeekerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobSeekerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobSeekerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobSeekerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSeekerProfile"
    objects: {
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string
      lastName: string
      jobTitle: string | null
      location: string | null
      resumeUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobSeekerProfile"]>
    composites: {}
  }

  type JobSeekerProfileGetPayload<S extends boolean | null | undefined | JobSeekerProfileDefaultArgs> = $Result.GetResult<Prisma.$JobSeekerProfilePayload, S>

  type JobSeekerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSeekerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSeekerProfileCountAggregateInputType | true
    }

  export interface JobSeekerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSeekerProfile'], meta: { name: 'JobSeekerProfile' } }
    /**
     * Find zero or one JobSeekerProfile that matches the filter.
     * @param {JobSeekerProfileFindUniqueArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSeekerProfileFindUniqueArgs>(args: SelectSubset<T, JobSeekerProfileFindUniqueArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSeekerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSeekerProfileFindUniqueOrThrowArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSeekerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindFirstArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSeekerProfileFindFirstArgs>(args?: SelectSubset<T, JobSeekerProfileFindFirstArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSeekerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindFirstOrThrowArgs} args - Arguments to find a JobSeekerProfile
     * @example
     * // Get one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSeekerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSeekerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSeekerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSeekerProfiles
     * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany()
     * 
     * // Get first 10 JobSeekerProfiles
     * const jobSeekerProfiles = await prisma.jobSeekerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobSeekerProfileFindManyArgs>(args?: SelectSubset<T, JobSeekerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSeekerProfile.
     * @param {JobSeekerProfileCreateArgs} args - Arguments to create a JobSeekerProfile.
     * @example
     * // Create one JobSeekerProfile
     * const JobSeekerProfile = await prisma.jobSeekerProfile.create({
     *   data: {
     *     // ... data to create a JobSeekerProfile
     *   }
     * })
     * 
     */
    create<T extends JobSeekerProfileCreateArgs>(args: SelectSubset<T, JobSeekerProfileCreateArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSeekerProfiles.
     * @param {JobSeekerProfileCreateManyArgs} args - Arguments to create many JobSeekerProfiles.
     * @example
     * // Create many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSeekerProfileCreateManyArgs>(args?: SelectSubset<T, JobSeekerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSeekerProfiles and returns the data saved in the database.
     * @param {JobSeekerProfileCreateManyAndReturnArgs} args - Arguments to create many JobSeekerProfiles.
     * @example
     * // Create many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSeekerProfiles and only return the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSeekerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSeekerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSeekerProfile.
     * @param {JobSeekerProfileDeleteArgs} args - Arguments to delete one JobSeekerProfile.
     * @example
     * // Delete one JobSeekerProfile
     * const JobSeekerProfile = await prisma.jobSeekerProfile.delete({
     *   where: {
     *     // ... filter to delete one JobSeekerProfile
     *   }
     * })
     * 
     */
    delete<T extends JobSeekerProfileDeleteArgs>(args: SelectSubset<T, JobSeekerProfileDeleteArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSeekerProfile.
     * @param {JobSeekerProfileUpdateArgs} args - Arguments to update one JobSeekerProfile.
     * @example
     * // Update one JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSeekerProfileUpdateArgs>(args: SelectSubset<T, JobSeekerProfileUpdateArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSeekerProfiles.
     * @param {JobSeekerProfileDeleteManyArgs} args - Arguments to filter JobSeekerProfiles to delete.
     * @example
     * // Delete a few JobSeekerProfiles
     * const { count } = await prisma.jobSeekerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSeekerProfileDeleteManyArgs>(args?: SelectSubset<T, JobSeekerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSeekerProfileUpdateManyArgs>(args: SelectSubset<T, JobSeekerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSeekerProfiles and returns the data updated in the database.
     * @param {JobSeekerProfileUpdateManyAndReturnArgs} args - Arguments to update many JobSeekerProfiles.
     * @example
     * // Update many JobSeekerProfiles
     * const jobSeekerProfile = await prisma.jobSeekerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSeekerProfiles and only return the `id`
     * const jobSeekerProfileWithIdOnly = await prisma.jobSeekerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobSeekerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSeekerProfile.
     * @param {JobSeekerProfileUpsertArgs} args - Arguments to update or create a JobSeekerProfile.
     * @example
     * // Update or create a JobSeekerProfile
     * const jobSeekerProfile = await prisma.jobSeekerProfile.upsert({
     *   create: {
     *     // ... data to create a JobSeekerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSeekerProfile we want to update
     *   }
     * })
     */
    upsert<T extends JobSeekerProfileUpsertArgs>(args: SelectSubset<T, JobSeekerProfileUpsertArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSeekerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileCountArgs} args - Arguments to filter JobSeekerProfiles to count.
     * @example
     * // Count the number of JobSeekerProfiles
     * const count = await prisma.jobSeekerProfile.count({
     *   where: {
     *     // ... the filter for the JobSeekerProfiles we want to count
     *   }
     * })
    **/
    count<T extends JobSeekerProfileCountArgs>(
      args?: Subset<T, JobSeekerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSeekerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSeekerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobSeekerProfileAggregateArgs>(args: Subset<T, JobSeekerProfileAggregateArgs>): Prisma.PrismaPromise<GetJobSeekerProfileAggregateType<T>>

    /**
     * Group by JobSeekerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSeekerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobSeekerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSeekerProfileGroupByArgs['orderBy'] }
        : { orderBy?: JobSeekerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobSeekerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSeekerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSeekerProfile model
   */
  readonly fields: JobSeekerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSeekerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSeekerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends JobSeekerProfile$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfile$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobSeekerProfile model
   */
  interface JobSeekerProfileFieldRefs {
    readonly id: FieldRef<"JobSeekerProfile", 'Int'>
    readonly userId: FieldRef<"JobSeekerProfile", 'Int'>
    readonly firstName: FieldRef<"JobSeekerProfile", 'String'>
    readonly lastName: FieldRef<"JobSeekerProfile", 'String'>
    readonly jobTitle: FieldRef<"JobSeekerProfile", 'String'>
    readonly location: FieldRef<"JobSeekerProfile", 'String'>
    readonly resumeUrl: FieldRef<"JobSeekerProfile", 'String'>
    readonly createdAt: FieldRef<"JobSeekerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"JobSeekerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobSeekerProfile findUnique
   */
  export type JobSeekerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile findUniqueOrThrow
   */
  export type JobSeekerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile findFirst
   */
  export type JobSeekerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile findFirstOrThrow
   */
  export type JobSeekerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfile to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile findMany
   */
  export type JobSeekerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter, which JobSeekerProfiles to fetch.
     */
    where?: JobSeekerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSeekerProfiles to fetch.
     */
    orderBy?: JobSeekerProfileOrderByWithRelationInput | JobSeekerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSeekerProfiles.
     */
    cursor?: JobSeekerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSeekerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSeekerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSeekerProfiles.
     */
    distinct?: JobSeekerProfileScalarFieldEnum | JobSeekerProfileScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile create
   */
  export type JobSeekerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSeekerProfile.
     */
    data: XOR<JobSeekerProfileCreateInput, JobSeekerProfileUncheckedCreateInput>
  }

  /**
   * JobSeekerProfile createMany
   */
  export type JobSeekerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSeekerProfiles.
     */
    data: JobSeekerProfileCreateManyInput | JobSeekerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSeekerProfile createManyAndReturn
   */
  export type JobSeekerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many JobSeekerProfiles.
     */
    data: JobSeekerProfileCreateManyInput | JobSeekerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerProfile update
   */
  export type JobSeekerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSeekerProfile.
     */
    data: XOR<JobSeekerProfileUpdateInput, JobSeekerProfileUncheckedUpdateInput>
    /**
     * Choose, which JobSeekerProfile to update.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile updateMany
   */
  export type JobSeekerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSeekerProfiles.
     */
    data: XOR<JobSeekerProfileUpdateManyMutationInput, JobSeekerProfileUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerProfiles to update
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to update.
     */
    limit?: number
  }

  /**
   * JobSeekerProfile updateManyAndReturn
   */
  export type JobSeekerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * The data used to update JobSeekerProfiles.
     */
    data: XOR<JobSeekerProfileUpdateManyMutationInput, JobSeekerProfileUncheckedUpdateManyInput>
    /**
     * Filter which JobSeekerProfiles to update
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSeekerProfile upsert
   */
  export type JobSeekerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSeekerProfile to update in case it exists.
     */
    where: JobSeekerProfileWhereUniqueInput
    /**
     * In case the JobSeekerProfile found by the `where` argument doesn't exist, create a new JobSeekerProfile with this data.
     */
    create: XOR<JobSeekerProfileCreateInput, JobSeekerProfileUncheckedCreateInput>
    /**
     * In case the JobSeekerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSeekerProfileUpdateInput, JobSeekerProfileUncheckedUpdateInput>
  }

  /**
   * JobSeekerProfile delete
   */
  export type JobSeekerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
    /**
     * Filter which JobSeekerProfile to delete.
     */
    where: JobSeekerProfileWhereUniqueInput
  }

  /**
   * JobSeekerProfile deleteMany
   */
  export type JobSeekerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSeekerProfiles to delete
     */
    where?: JobSeekerProfileWhereInput
    /**
     * Limit how many JobSeekerProfiles to delete.
     */
    limit?: number
  }

  /**
   * JobSeekerProfile.applications
   */
  export type JobSeekerProfile$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobSeekerProfile without action
   */
  export type JobSeekerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSeekerProfile
     */
    select?: JobSeekerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSeekerProfile
     */
    omit?: JobSeekerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSeekerProfileInclude<ExtArgs> | null
  }


  /**
   * Model CompanyProfile
   */

  export type AggregateCompanyProfile = {
    _count: CompanyProfileCountAggregateOutputType | null
    _avg: CompanyProfileAvgAggregateOutputType | null
    _sum: CompanyProfileSumAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  export type CompanyProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CompanyProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CompanyProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    industry: string | null
    companySize: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    industry: string | null
    companySize: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    industry: number
    companySize: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CompanyProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CompanyProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    industry?: true
    companySize?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    industry?: true
    companySize?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    industry?: true
    companySize?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfile to aggregate.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyProfiles
    **/
    _count?: true | CompanyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type GetCompanyProfileAggregateType<T extends CompanyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyProfile[P]>
      : GetScalarType<T[P], AggregateCompanyProfile[P]>
  }




  export type CompanyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyProfileWhereInput
    orderBy?: CompanyProfileOrderByWithAggregationInput | CompanyProfileOrderByWithAggregationInput[]
    by: CompanyProfileScalarFieldEnum[] | CompanyProfileScalarFieldEnum
    having?: CompanyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyProfileCountAggregateInputType | true
    _avg?: CompanyProfileAvgAggregateInputType
    _sum?: CompanyProfileSumAggregateInputType
    _min?: CompanyProfileMinAggregateInputType
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type CompanyProfileGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    industry: string | null
    companySize: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyProfileCountAggregateOutputType | null
    _avg: CompanyProfileAvgAggregateOutputType | null
    _sum: CompanyProfileSumAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  type GetCompanyProfileGroupByPayload<T extends CompanyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
        }
      >
    >


  export type CompanyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    industry?: boolean
    companySize?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobPosts?: boolean | CompanyProfile$jobPostsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    industry?: boolean
    companySize?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    industry?: boolean
    companySize?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    industry?: boolean
    companySize?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "industry" | "companySize" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["companyProfile"]>
  export type CompanyProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobPosts?: boolean | CompanyProfile$jobPostsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobPosts: Prisma.$JobPostingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      industry: string | null
      companySize: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyProfile"]>
    composites: {}
  }

  type CompanyProfileGetPayload<S extends boolean | null | undefined | CompanyProfileDefaultArgs> = $Result.GetResult<Prisma.$CompanyProfilePayload, S>

  type CompanyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyProfileCountAggregateInputType | true
    }

  export interface CompanyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyProfile'], meta: { name: 'CompanyProfile' } }
    /**
     * Find zero or one CompanyProfile that matches the filter.
     * @param {CompanyProfileFindUniqueArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyProfileFindUniqueArgs>(args: SelectSubset<T, CompanyProfileFindUniqueArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyProfileFindUniqueOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyProfileFindFirstArgs>(args?: SelectSubset<T, CompanyProfileFindFirstArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany()
     * 
     * // Get first 10 CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyProfileFindManyArgs>(args?: SelectSubset<T, CompanyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyProfile.
     * @param {CompanyProfileCreateArgs} args - Arguments to create a CompanyProfile.
     * @example
     * // Create one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.create({
     *   data: {
     *     // ... data to create a CompanyProfile
     *   }
     * })
     * 
     */
    create<T extends CompanyProfileCreateArgs>(args: SelectSubset<T, CompanyProfileCreateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyProfiles.
     * @param {CompanyProfileCreateManyArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyProfileCreateManyArgs>(args?: SelectSubset<T, CompanyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyProfiles and returns the data saved in the database.
     * @param {CompanyProfileCreateManyAndReturnArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyProfile.
     * @param {CompanyProfileDeleteArgs} args - Arguments to delete one CompanyProfile.
     * @example
     * // Delete one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.delete({
     *   where: {
     *     // ... filter to delete one CompanyProfile
     *   }
     * })
     * 
     */
    delete<T extends CompanyProfileDeleteArgs>(args: SelectSubset<T, CompanyProfileDeleteArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyProfile.
     * @param {CompanyProfileUpdateArgs} args - Arguments to update one CompanyProfile.
     * @example
     * // Update one CompanyProfile
     * const companyProfile = await prisma.companyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyProfileUpdateArgs>(args: SelectSubset<T, CompanyProfileUpdateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyProfiles.
     * @param {CompanyProfileDeleteManyArgs} args - Arguments to filter CompanyProfiles to delete.
     * @example
     * // Delete a few CompanyProfiles
     * const { count } = await prisma.companyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyProfileDeleteManyArgs>(args?: SelectSubset<T, CompanyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyProfileUpdateManyArgs>(args: SelectSubset<T, CompanyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles and returns the data updated in the database.
     * @param {CompanyProfileUpdateManyAndReturnArgs} args - Arguments to update many CompanyProfiles.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyProfile.
     * @param {CompanyProfileUpsertArgs} args - Arguments to update or create a CompanyProfile.
     * @example
     * // Update or create a CompanyProfile
     * const companyProfile = await prisma.companyProfile.upsert({
     *   create: {
     *     // ... data to create a CompanyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyProfile we want to update
     *   }
     * })
     */
    upsert<T extends CompanyProfileUpsertArgs>(args: SelectSubset<T, CompanyProfileUpsertArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileCountArgs} args - Arguments to filter CompanyProfiles to count.
     * @example
     * // Count the number of CompanyProfiles
     * const count = await prisma.companyProfile.count({
     *   where: {
     *     // ... the filter for the CompanyProfiles we want to count
     *   }
     * })
    **/
    count<T extends CompanyProfileCountArgs>(
      args?: Subset<T, CompanyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyProfileAggregateArgs>(args: Subset<T, CompanyProfileAggregateArgs>): Prisma.PrismaPromise<GetCompanyProfileAggregateType<T>>

    /**
     * Group by CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyProfileGroupByArgs['orderBy'] }
        : { orderBy?: CompanyProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyProfile model
   */
  readonly fields: CompanyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobPosts<T extends CompanyProfile$jobPostsArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfile$jobPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyProfile model
   */
  interface CompanyProfileFieldRefs {
    readonly id: FieldRef<"CompanyProfile", 'Int'>
    readonly userId: FieldRef<"CompanyProfile", 'Int'>
    readonly companyName: FieldRef<"CompanyProfile", 'String'>
    readonly industry: FieldRef<"CompanyProfile", 'String'>
    readonly companySize: FieldRef<"CompanyProfile", 'String'>
    readonly website: FieldRef<"CompanyProfile", 'String'>
    readonly createdAt: FieldRef<"CompanyProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyProfile findUnique
   */
  export type CompanyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findUniqueOrThrow
   */
  export type CompanyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findFirst
   */
  export type CompanyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findFirstOrThrow
   */
  export type CompanyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findMany
   */
  export type CompanyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfiles to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile create
   */
  export type CompanyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyProfile.
     */
    data: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
  }

  /**
   * CompanyProfile createMany
   */
  export type CompanyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyProfile createManyAndReturn
   */
  export type CompanyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyProfile update
   */
  export type CompanyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyProfile.
     */
    data: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
    /**
     * Choose, which CompanyProfile to update.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile updateMany
   */
  export type CompanyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
  }

  /**
   * CompanyProfile updateManyAndReturn
   */
  export type CompanyProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyProfile upsert
   */
  export type CompanyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyProfile to update in case it exists.
     */
    where: CompanyProfileWhereUniqueInput
    /**
     * In case the CompanyProfile found by the `where` argument doesn't exist, create a new CompanyProfile with this data.
     */
    create: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
    /**
     * In case the CompanyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
  }

  /**
   * CompanyProfile delete
   */
  export type CompanyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter which CompanyProfile to delete.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile deleteMany
   */
  export type CompanyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfiles to delete
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to delete.
     */
    limit?: number
  }

  /**
   * CompanyProfile.jobPosts
   */
  export type CompanyProfile$jobPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    cursor?: JobPostingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * CompanyProfile without action
   */
  export type CompanyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
  }


  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    title: string | null
    description: string | null
    location: string | null
    employment: string | null
    salaryMin: number | null
    salaryMax: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    title: string | null
    description: string | null
    location: string | null
    employment: string | null
    salaryMin: number | null
    salaryMax: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    companyId: number
    title: number
    description: number
    location: number
    employment: number
    salaryMin: number
    salaryMax: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobPostingAvgAggregateInputType = {
    id?: true
    companyId?: true
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingSumAggregateInputType = {
    id?: true
    companyId?: true
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostingMinAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    location?: true
    employment?: true
    salaryMin?: true
    salaryMax?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    location?: true
    employment?: true
    salaryMin?: true
    salaryMax?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    location?: true
    employment?: true
    salaryMin?: true
    salaryMax?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _avg?: JobPostingAvgAggregateInputType
    _sum?: JobPostingSumAggregateInputType
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: number
    companyId: number
    title: string
    description: string
    location: string | null
    employment: string | null
    salaryMin: number | null
    salaryMax: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: JobPostingCountAggregateOutputType | null
    _avg: JobPostingAvgAggregateOutputType | null
    _sum: JobPostingSumAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    employment?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applications?: boolean | JobPosting$applicationsArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    employment?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    employment?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    employment?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobPostingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "title" | "description" | "location" | "employment" | "salaryMin" | "salaryMax" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["jobPosting"]>
  export type JobPostingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobPosting$applicationsArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
    _count?: boolean | JobPostingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobPostingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }
  export type JobPostingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }

  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
      company: Prisma.$CompanyProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number
      title: string
      description: string
      location: string | null
      employment: string | null
      salaryMin: number | null
      salaryMax: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }

  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostingFindUniqueArgs>(args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPosting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostingFindFirstArgs>(args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostingFindManyArgs>(args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
     */
    create<T extends JobPostingCreateArgs>(args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPostings.
     * @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostingCreateManyArgs>(args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPostings and returns the data saved in the database.
     * @param {JobPostingCreateManyAndReturnArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPostingCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPostingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
     */
    delete<T extends JobPostingDeleteArgs>(args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostingUpdateArgs>(args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostingDeleteManyArgs>(args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostingUpdateManyArgs>(args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings and returns the data updated in the database.
     * @param {JobPostingUpdateManyAndReturnArgs} args - Arguments to update many JobPostings.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobPostingUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPostingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
     */
    upsert<T extends JobPostingUpsertArgs>(args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends JobPosting$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobPosting$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends CompanyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfileDefaultArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobPosting model
   */
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'Int'>
    readonly companyId: FieldRef<"JobPosting", 'Int'>
    readonly title: FieldRef<"JobPosting", 'String'>
    readonly description: FieldRef<"JobPosting", 'String'>
    readonly location: FieldRef<"JobPosting", 'String'>
    readonly employment: FieldRef<"JobPosting", 'String'>
    readonly salaryMin: FieldRef<"JobPosting", 'Int'>
    readonly salaryMax: FieldRef<"JobPosting", 'Int'>
    readonly isActive: FieldRef<"JobPosting", 'Boolean'>
    readonly createdAt: FieldRef<"JobPosting", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPosting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }

  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting createManyAndReturn
   */
  export type JobPostingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting updateManyAndReturn
   */
  export type JobPostingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }

  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to delete.
     */
    limit?: number
  }

  /**
   * JobPosting.applications
   */
  export type JobPosting$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationAvgAggregateOutputType = {
    id: number | null
    jobSeekerId: number | null
    jobPostingId: number | null
  }

  export type JobApplicationSumAggregateOutputType = {
    id: number | null
    jobSeekerId: number | null
    jobPostingId: number | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: number | null
    jobSeekerId: number | null
    jobPostingId: number | null
    status: $Enums.ApplicationStatus | null
    coverLetter: string | null
    appliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: number | null
    jobSeekerId: number | null
    jobPostingId: number | null
    status: $Enums.ApplicationStatus | null
    coverLetter: string | null
    appliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    jobSeekerId: number
    jobPostingId: number
    status: number
    coverLetter: number
    appliedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationAvgAggregateInputType = {
    id?: true
    jobSeekerId?: true
    jobPostingId?: true
  }

  export type JobApplicationSumAggregateInputType = {
    id?: true
    jobSeekerId?: true
    jobPostingId?: true
  }

  export type JobApplicationMinAggregateInputType = {
    id?: true
    jobSeekerId?: true
    jobPostingId?: true
    status?: true
    coverLetter?: true
    appliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    jobSeekerId?: true
    jobPostingId?: true
    status?: true
    coverLetter?: true
    appliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    jobSeekerId?: true
    jobPostingId?: true
    status?: true
    coverLetter?: true
    appliedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _avg?: JobApplicationAvgAggregateInputType
    _sum?: JobApplicationSumAggregateInputType
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: number
    jobSeekerId: number
    jobPostingId: number
    status: $Enums.ApplicationStatus
    coverLetter: string | null
    appliedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerId?: boolean
    jobPostingId?: boolean
    status?: boolean
    coverLetter?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerId?: boolean
    jobPostingId?: boolean
    status?: boolean
    coverLetter?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobSeekerId?: boolean
    jobPostingId?: boolean
    status?: boolean
    coverLetter?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    jobSeekerId?: boolean
    jobPostingId?: boolean
    status?: boolean
    coverLetter?: boolean
    appliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobSeekerId" | "jobPostingId" | "status" | "coverLetter" | "appliedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPosting?: boolean | JobPostingDefaultArgs<ExtArgs>
    jobSeeker?: boolean | JobSeekerProfileDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      jobPosting: Prisma.$JobPostingPayload<ExtArgs>
      jobSeeker: Prisma.$JobSeekerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobSeekerId: number
      jobPostingId: number
      status: $Enums.ApplicationStatus
      coverLetter: string | null
      appliedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPosting<T extends JobPostingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostingDefaultArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobSeeker<T extends JobSeekerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobSeekerProfileDefaultArgs<ExtArgs>>): Prisma__JobSeekerProfileClient<$Result.GetResult<Prisma.$JobSeekerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'Int'>
    readonly jobSeekerId: FieldRef<"JobApplication", 'Int'>
    readonly jobPostingId: FieldRef<"JobApplication", 'Int'>
    readonly status: FieldRef<"JobApplication", 'ApplicationStatus'>
    readonly coverLetter: FieldRef<"JobApplication", 'String'>
    readonly appliedAt: FieldRef<"JobApplication", 'DateTime'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JobSeekerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    jobTitle: 'jobTitle',
    location: 'location',
    resumeUrl: 'resumeUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobSeekerProfileScalarFieldEnum = (typeof JobSeekerProfileScalarFieldEnum)[keyof typeof JobSeekerProfileScalarFieldEnum]


  export const CompanyProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    industry: 'industry',
    companySize: 'companySize',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyProfileScalarFieldEnum = (typeof CompanyProfileScalarFieldEnum)[keyof typeof CompanyProfileScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    title: 'title',
    description: 'description',
    location: 'location',
    employment: 'employment',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    jobSeekerId: 'jobSeekerId',
    jobPostingId: 'jobPostingId',
    status: 'status',
    coverLetter: 'coverLetter',
    appliedAt: 'appliedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    companyProfile?: XOR<CompanyProfileNullableScalarRelationFilter, CompanyProfileWhereInput> | null
    jobSeekerProfile?: XOR<JobSeekerProfileNullableScalarRelationFilter, JobSeekerProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyProfile?: CompanyProfileOrderByWithRelationInput
    jobSeekerProfile?: JobSeekerProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    companyProfile?: XOR<CompanyProfileNullableScalarRelationFilter, CompanyProfileWhereInput> | null
    jobSeekerProfile?: XOR<JobSeekerProfileNullableScalarRelationFilter, JobSeekerProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobSeekerProfileWhereInput = {
    AND?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    OR?: JobSeekerProfileWhereInput[]
    NOT?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    id?: IntFilter<"JobSeekerProfile"> | number
    userId?: IntFilter<"JobSeekerProfile"> | number
    firstName?: StringFilter<"JobSeekerProfile"> | string
    lastName?: StringFilter<"JobSeekerProfile"> | string
    jobTitle?: StringNullableFilter<"JobSeekerProfile"> | string | null
    location?: StringNullableFilter<"JobSeekerProfile"> | string | null
    resumeUrl?: StringNullableFilter<"JobSeekerProfile"> | string | null
    createdAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    applications?: JobApplicationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JobSeekerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: JobApplicationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type JobSeekerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    OR?: JobSeekerProfileWhereInput[]
    NOT?: JobSeekerProfileWhereInput | JobSeekerProfileWhereInput[]
    firstName?: StringFilter<"JobSeekerProfile"> | string
    lastName?: StringFilter<"JobSeekerProfile"> | string
    jobTitle?: StringNullableFilter<"JobSeekerProfile"> | string | null
    location?: StringNullableFilter<"JobSeekerProfile"> | string | null
    resumeUrl?: StringNullableFilter<"JobSeekerProfile"> | string | null
    createdAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"JobSeekerProfile"> | Date | string
    applications?: JobApplicationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type JobSeekerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobSeekerProfileCountOrderByAggregateInput
    _avg?: JobSeekerProfileAvgOrderByAggregateInput
    _max?: JobSeekerProfileMaxOrderByAggregateInput
    _min?: JobSeekerProfileMinOrderByAggregateInput
    _sum?: JobSeekerProfileSumOrderByAggregateInput
  }

  export type JobSeekerProfileScalarWhereWithAggregatesInput = {
    AND?: JobSeekerProfileScalarWhereWithAggregatesInput | JobSeekerProfileScalarWhereWithAggregatesInput[]
    OR?: JobSeekerProfileScalarWhereWithAggregatesInput[]
    NOT?: JobSeekerProfileScalarWhereWithAggregatesInput | JobSeekerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobSeekerProfile"> | number
    userId?: IntWithAggregatesFilter<"JobSeekerProfile"> | number
    firstName?: StringWithAggregatesFilter<"JobSeekerProfile"> | string
    lastName?: StringWithAggregatesFilter<"JobSeekerProfile"> | string
    jobTitle?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"JobSeekerProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobSeekerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobSeekerProfile"> | Date | string
  }

  export type CompanyProfileWhereInput = {
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    id?: IntFilter<"CompanyProfile"> | number
    userId?: IntFilter<"CompanyProfile"> | number
    companyName?: StringFilter<"CompanyProfile"> | string
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    companySize?: StringNullableFilter<"CompanyProfile"> | string | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobPosts?: JobPostingListRelationFilter
  }

  export type CompanyProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    industry?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobPosts?: JobPostingOrderByRelationAggregateInput
  }

  export type CompanyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    companyName?: StringFilter<"CompanyProfile"> | string
    industry?: StringNullableFilter<"CompanyProfile"> | string | null
    companySize?: StringNullableFilter<"CompanyProfile"> | string | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobPosts?: JobPostingListRelationFilter
  }, "id" | "userId">

  export type CompanyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    industry?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyProfileCountOrderByAggregateInput
    _avg?: CompanyProfileAvgOrderByAggregateInput
    _max?: CompanyProfileMaxOrderByAggregateInput
    _min?: CompanyProfileMinOrderByAggregateInput
    _sum?: CompanyProfileSumOrderByAggregateInput
  }

  export type CompanyProfileScalarWhereWithAggregatesInput = {
    AND?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    OR?: CompanyProfileScalarWhereWithAggregatesInput[]
    NOT?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyProfile"> | number
    userId?: IntWithAggregatesFilter<"CompanyProfile"> | number
    companyName?: StringWithAggregatesFilter<"CompanyProfile"> | string
    industry?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    companySize?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanyProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyProfile"> | Date | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: IntFilter<"JobPosting"> | number
    companyId?: IntFilter<"JobPosting"> | number
    title?: StringFilter<"JobPosting"> | string
    description?: StringFilter<"JobPosting"> | string
    location?: StringNullableFilter<"JobPosting"> | string | null
    employment?: StringNullableFilter<"JobPosting"> | string | null
    salaryMin?: IntNullableFilter<"JobPosting"> | number | null
    salaryMax?: IntNullableFilter<"JobPosting"> | number | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    applications?: JobApplicationListRelationFilter
    company?: XOR<CompanyProfileScalarRelationFilter, CompanyProfileWhereInput>
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applications?: JobApplicationOrderByRelationAggregateInput
    company?: CompanyProfileOrderByWithRelationInput
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    companyId?: IntFilter<"JobPosting"> | number
    title?: StringFilter<"JobPosting"> | string
    description?: StringFilter<"JobPosting"> | string
    location?: StringNullableFilter<"JobPosting"> | string | null
    employment?: StringNullableFilter<"JobPosting"> | string | null
    salaryMin?: IntNullableFilter<"JobPosting"> | number | null
    salaryMax?: IntNullableFilter<"JobPosting"> | number | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
    applications?: JobApplicationListRelationFilter
    company?: XOR<CompanyProfileScalarRelationFilter, CompanyProfileWhereInput>
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    employment?: SortOrderInput | SortOrder
    salaryMin?: SortOrderInput | SortOrder
    salaryMax?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _avg?: JobPostingAvgOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
    _sum?: JobPostingSumOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobPosting"> | number
    companyId?: IntWithAggregatesFilter<"JobPosting"> | number
    title?: StringWithAggregatesFilter<"JobPosting"> | string
    description?: StringWithAggregatesFilter<"JobPosting"> | string
    location?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    employment?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    salaryMin?: IntNullableWithAggregatesFilter<"JobPosting"> | number | null
    salaryMax?: IntNullableWithAggregatesFilter<"JobPosting"> | number | null
    isActive?: BoolWithAggregatesFilter<"JobPosting"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    jobSeekerId?: IntFilter<"JobApplication"> | number
    jobPostingId?: IntFilter<"JobApplication"> | number
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    jobSeeker?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPosting?: JobPostingOrderByWithRelationInput
    jobSeeker?: JobSeekerProfileOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jobSeekerId_jobPostingId?: JobApplicationJobSeekerIdJobPostingIdCompoundUniqueInput
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    jobSeekerId?: IntFilter<"JobApplication"> | number
    jobPostingId?: IntFilter<"JobApplication"> | number
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    jobPosting?: XOR<JobPostingScalarRelationFilter, JobPostingWhereInput>
    jobSeeker?: XOR<JobSeekerProfileScalarRelationFilter, JobSeekerProfileWhereInput>
  }, "id" | "jobSeekerId_jobPostingId">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _avg?: JobApplicationAvgOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
    _sum?: JobApplicationSumOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobApplication"> | number
    jobSeekerId?: IntWithAggregatesFilter<"JobApplication"> | number
    jobPostingId?: IntWithAggregatesFilter<"JobApplication"> | number
    status?: EnumApplicationStatusWithAggregatesFilter<"JobApplication"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    appliedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
    jobSeekerProfile?: JobSeekerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
    jobSeekerProfile?: JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
    jobSeekerProfile?: JobSeekerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
    jobSeekerProfile?: JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerProfileCreateInput = {
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobSeekerInput
    user: UserCreateNestedOneWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobSeekerInput
  }

  export type JobSeekerProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobSeekerNestedInput
    user?: UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobSeekerNestedInput
  }

  export type JobSeekerProfileCreateManyInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobSeekerProfileUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileCreateInput = {
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
    jobPosts?: JobPostingCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosts?: JobPostingUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    jobPosts?: JobPostingUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosts?: JobPostingUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyProfileUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateInput = {
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobPostingInput
    company: CompanyProfileCreateNestedOneWithoutJobPostsInput
  }

  export type JobPostingUncheckedCreateInput = {
    id?: number
    companyId: number
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobPostingNestedInput
    company?: CompanyProfileUpdateOneRequiredWithoutJobPostsNestedInput
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingCreateManyInput = {
    id?: number
    companyId: number
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutApplicationsInput
    jobSeeker: JobSeekerProfileCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: number
    jobSeekerId: number
    jobPostingId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutApplicationsNestedInput
    jobSeeker?: JobSeekerProfileUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobSeekerId?: IntFieldUpdateOperationsInput | number
    jobPostingId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: number
    jobSeekerId: number
    jobPostingId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobSeekerId?: IntFieldUpdateOperationsInput | number
    jobPostingId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyProfileNullableScalarRelationFilter = {
    is?: CompanyProfileWhereInput | null
    isNot?: CompanyProfileWhereInput | null
  }

  export type JobSeekerProfileNullableScalarRelationFilter = {
    is?: JobSeekerProfileWhereInput | null
    isNot?: JobSeekerProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobSeekerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSeekerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type JobSeekerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSeekerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    jobTitle?: SortOrder
    location?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSeekerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type JobPostingListRelationFilter = {
    every?: JobPostingWhereInput
    some?: JobPostingWhereInput
    none?: JobPostingWhereInput
  }

  export type JobPostingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    companySize?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CompanyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    companySize?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    companySize?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyProfileScalarRelationFilter = {
    is?: CompanyProfileWhereInput
    isNot?: CompanyProfileWhereInput
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    employment?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    employment?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    employment?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostingSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type JobPostingScalarRelationFilter = {
    is?: JobPostingWhereInput
    isNot?: JobPostingWhereInput
  }

  export type JobSeekerProfileScalarRelationFilter = {
    is?: JobSeekerProfileWhereInput
    isNot?: JobSeekerProfileWhereInput
  }

  export type JobApplicationJobSeekerIdJobPostingIdCompoundUniqueInput = {
    jobSeekerId: number
    jobPostingId: number
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
    status?: SortOrder
    coverLetter?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    jobSeekerId?: SortOrder
    jobPostingId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type CompanyProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type JobSeekerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type CompanyProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobSeekerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    upsert?: JobSeekerProfileUpsertWithoutUserInput
    disconnect?: JobSeekerProfileWhereInput | boolean
    delete?: JobSeekerProfileWhereInput | boolean
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutUserInput, JobSeekerProfileUpdateWithoutUserInput>, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutUserInput
    upsert?: JobSeekerProfileUpsertWithoutUserInput
    disconnect?: JobSeekerProfileWhereInput | boolean
    delete?: JobSeekerProfileWhereInput | boolean
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutUserInput, JobSeekerProfileUpdateWithoutUserInput>, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobApplicationCreateNestedManyWithoutJobSeekerInput = {
    create?: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput> | JobApplicationCreateWithoutJobSeekerInput[] | JobApplicationUncheckedCreateWithoutJobSeekerInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobSeekerInput | JobApplicationCreateOrConnectWithoutJobSeekerInput[]
    createMany?: JobApplicationCreateManyJobSeekerInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutJobSeekerProfileInput = {
    create?: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobSeekerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobSeekerInput = {
    create?: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput> | JobApplicationCreateWithoutJobSeekerInput[] | JobApplicationUncheckedCreateWithoutJobSeekerInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobSeekerInput | JobApplicationCreateOrConnectWithoutJobSeekerInput[]
    createMany?: JobApplicationCreateManyJobSeekerInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type JobApplicationUpdateManyWithoutJobSeekerNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput> | JobApplicationCreateWithoutJobSeekerInput[] | JobApplicationUncheckedCreateWithoutJobSeekerInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobSeekerInput | JobApplicationCreateOrConnectWithoutJobSeekerInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobSeekerInput | JobApplicationUpsertWithWhereUniqueWithoutJobSeekerInput[]
    createMany?: JobApplicationCreateManyJobSeekerInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobSeekerInput | JobApplicationUpdateWithWhereUniqueWithoutJobSeekerInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobSeekerInput | JobApplicationUpdateManyWithWhereWithoutJobSeekerInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput = {
    create?: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobSeekerProfileInput
    upsert?: UserUpsertWithoutJobSeekerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobSeekerProfileInput, UserUpdateWithoutJobSeekerProfileInput>, UserUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobSeekerNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput> | JobApplicationCreateWithoutJobSeekerInput[] | JobApplicationUncheckedCreateWithoutJobSeekerInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobSeekerInput | JobApplicationCreateOrConnectWithoutJobSeekerInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobSeekerInput | JobApplicationUpsertWithWhereUniqueWithoutJobSeekerInput[]
    createMany?: JobApplicationCreateManyJobSeekerInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobSeekerInput | JobApplicationUpdateWithWhereUniqueWithoutJobSeekerInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobSeekerInput | JobApplicationUpdateManyWithWhereWithoutJobSeekerInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCompanyProfileInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
  }

  export type JobPostingCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput> | JobPostingCreateWithoutCompanyInput[] | JobPostingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutCompanyInput | JobPostingCreateOrConnectWithoutCompanyInput[]
    createMany?: JobPostingCreateManyCompanyInputEnvelope
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type JobPostingUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput> | JobPostingCreateWithoutCompanyInput[] | JobPostingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutCompanyInput | JobPostingCreateOrConnectWithoutCompanyInput[]
    createMany?: JobPostingCreateManyCompanyInputEnvelope
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyProfileNestedInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    upsert?: UserUpsertWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyProfileInput, UserUpdateWithoutCompanyProfileInput>, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type JobPostingUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput> | JobPostingCreateWithoutCompanyInput[] | JobPostingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutCompanyInput | JobPostingCreateOrConnectWithoutCompanyInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutCompanyInput | JobPostingUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobPostingCreateManyCompanyInputEnvelope
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutCompanyInput | JobPostingUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutCompanyInput | JobPostingUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type JobPostingUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput> | JobPostingCreateWithoutCompanyInput[] | JobPostingUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobPostingCreateOrConnectWithoutCompanyInput | JobPostingCreateOrConnectWithoutCompanyInput[]
    upsert?: JobPostingUpsertWithWhereUniqueWithoutCompanyInput | JobPostingUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobPostingCreateManyCompanyInputEnvelope
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[]
    update?: JobPostingUpdateWithWhereUniqueWithoutCompanyInput | JobPostingUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobPostingUpdateManyWithWhereWithoutCompanyInput | JobPostingUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
  }

  export type JobApplicationCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput> | JobApplicationCreateWithoutJobPostingInput[] | JobApplicationUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostingInput | JobApplicationCreateOrConnectWithoutJobPostingInput[]
    createMany?: JobApplicationCreateManyJobPostingInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type CompanyProfileCreateNestedOneWithoutJobPostsInput = {
    create?: XOR<CompanyProfileCreateWithoutJobPostsInput, CompanyProfileUncheckedCreateWithoutJobPostsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutJobPostsInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobPostingInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput> | JobApplicationCreateWithoutJobPostingInput[] | JobApplicationUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostingInput | JobApplicationCreateOrConnectWithoutJobPostingInput[]
    createMany?: JobApplicationCreateManyJobPostingInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type JobApplicationUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput> | JobApplicationCreateWithoutJobPostingInput[] | JobApplicationUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostingInput | JobApplicationCreateOrConnectWithoutJobPostingInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobPostingInput | JobApplicationUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: JobApplicationCreateManyJobPostingInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobPostingInput | JobApplicationUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobPostingInput | JobApplicationUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type CompanyProfileUpdateOneRequiredWithoutJobPostsNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutJobPostsInput, CompanyProfileUncheckedCreateWithoutJobPostsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutJobPostsInput
    upsert?: CompanyProfileUpsertWithoutJobPostsInput
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutJobPostsInput, CompanyProfileUpdateWithoutJobPostsInput>, CompanyProfileUncheckedUpdateWithoutJobPostsInput>
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobPostingNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput> | JobApplicationCreateWithoutJobPostingInput[] | JobApplicationUncheckedCreateWithoutJobPostingInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostingInput | JobApplicationCreateOrConnectWithoutJobPostingInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobPostingInput | JobApplicationUpsertWithWhereUniqueWithoutJobPostingInput[]
    createMany?: JobApplicationCreateManyJobPostingInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobPostingInput | JobApplicationUpdateWithWhereUniqueWithoutJobPostingInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobPostingInput | JobApplicationUpdateManyWithWhereWithoutJobPostingInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobPostingCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutApplicationsInput
    connect?: JobPostingWhereUniqueInput
  }

  export type JobSeekerProfileCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobSeekerProfileCreateWithoutApplicationsInput, JobSeekerProfileUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutApplicationsInput
    connect?: JobSeekerProfileWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type JobPostingUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostingCreateOrConnectWithoutApplicationsInput
    upsert?: JobPostingUpsertWithoutApplicationsInput
    connect?: JobPostingWhereUniqueInput
    update?: XOR<XOR<JobPostingUpdateToOneWithWhereWithoutApplicationsInput, JobPostingUpdateWithoutApplicationsInput>, JobPostingUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobSeekerProfileUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobSeekerProfileCreateWithoutApplicationsInput, JobSeekerProfileUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobSeekerProfileCreateOrConnectWithoutApplicationsInput
    upsert?: JobSeekerProfileUpsertWithoutApplicationsInput
    connect?: JobSeekerProfileWhereUniqueInput
    update?: XOR<XOR<JobSeekerProfileUpdateToOneWithWhereWithoutApplicationsInput, JobSeekerProfileUpdateWithoutApplicationsInput>, JobSeekerProfileUncheckedUpdateWithoutApplicationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type CompanyProfileCreateWithoutUserInput = {
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosts?: JobPostingCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosts?: JobPostingUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutUserInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
  }

  export type JobSeekerProfileCreateWithoutUserInput = {
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobSeekerInput
  }

  export type JobSeekerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobSeekerInput
  }

  export type JobSeekerProfileCreateOrConnectWithoutUserInput = {
    where: JobSeekerProfileWhereUniqueInput
    create: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
  }

  export type CompanyProfileUpsertWithoutUserInput = {
    update: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosts?: JobPostingUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosts?: JobPostingUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type JobSeekerProfileUpsertWithoutUserInput = {
    update: XOR<JobSeekerProfileUpdateWithoutUserInput, JobSeekerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<JobSeekerProfileCreateWithoutUserInput, JobSeekerProfileUncheckedCreateWithoutUserInput>
    where?: JobSeekerProfileWhereInput
  }

  export type JobSeekerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: JobSeekerProfileWhereInput
    data: XOR<JobSeekerProfileUpdateWithoutUserInput, JobSeekerProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobSeekerProfileUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobSeekerNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobSeekerNestedInput
  }

  export type JobApplicationCreateWithoutJobSeekerInput = {
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPosting: JobPostingCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobSeekerInput = {
    id?: number
    jobPostingId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobSeekerInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput>
  }

  export type JobApplicationCreateManyJobSeekerInputEnvelope = {
    data: JobApplicationCreateManyJobSeekerInput | JobApplicationCreateManyJobSeekerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutJobSeekerProfileInput = {
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobSeekerProfileInput = {
    id?: number
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobSeekerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobSeekerInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobSeekerInput, JobApplicationUncheckedUpdateWithoutJobSeekerInput>
    create: XOR<JobApplicationCreateWithoutJobSeekerInput, JobApplicationUncheckedCreateWithoutJobSeekerInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobSeekerInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobSeekerInput, JobApplicationUncheckedUpdateWithoutJobSeekerInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobSeekerInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobSeekerInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: IntFilter<"JobApplication"> | number
    jobSeekerId?: IntFilter<"JobApplication"> | number
    jobPostingId?: IntFilter<"JobApplication"> | number
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    appliedAt?: DateTimeFilter<"JobApplication"> | Date | string
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type UserUpsertWithoutJobSeekerProfileInput = {
    update: XOR<UserUpdateWithoutJobSeekerProfileInput, UserUncheckedUpdateWithoutJobSeekerProfileInput>
    create: XOR<UserCreateWithoutJobSeekerProfileInput, UserUncheckedCreateWithoutJobSeekerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobSeekerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobSeekerProfileInput, UserUncheckedUpdateWithoutJobSeekerProfileInput>
  }

  export type UserUpdateWithoutJobSeekerProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobSeekerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCompanyProfileInput = {
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyProfileInput = {
    id?: number
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
  }

  export type JobPostingCreateWithoutCompanyInput = {
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobPostingInput
  }

  export type JobPostingCreateOrConnectWithoutCompanyInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput>
  }

  export type JobPostingCreateManyCompanyInputEnvelope = {
    data: JobPostingCreateManyCompanyInput | JobPostingCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyProfileInput = {
    update: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type UserUpdateWithoutCompanyProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeekerProfile?: JobSeekerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobPostingUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobPostingWhereUniqueInput
    update: XOR<JobPostingUpdateWithoutCompanyInput, JobPostingUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobPostingCreateWithoutCompanyInput, JobPostingUncheckedCreateWithoutCompanyInput>
  }

  export type JobPostingUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobPostingWhereUniqueInput
    data: XOR<JobPostingUpdateWithoutCompanyInput, JobPostingUncheckedUpdateWithoutCompanyInput>
  }

  export type JobPostingUpdateManyWithWhereWithoutCompanyInput = {
    where: JobPostingScalarWhereInput
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobPostingScalarWhereInput = {
    AND?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    OR?: JobPostingScalarWhereInput[]
    NOT?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[]
    id?: IntFilter<"JobPosting"> | number
    companyId?: IntFilter<"JobPosting"> | number
    title?: StringFilter<"JobPosting"> | string
    description?: StringFilter<"JobPosting"> | string
    location?: StringNullableFilter<"JobPosting"> | string | null
    employment?: StringNullableFilter<"JobPosting"> | string | null
    salaryMin?: IntNullableFilter<"JobPosting"> | number | null
    salaryMax?: IntNullableFilter<"JobPosting"> | number | null
    isActive?: BoolFilter<"JobPosting"> | boolean
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string
  }

  export type JobApplicationCreateWithoutJobPostingInput = {
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    jobSeeker: JobSeekerProfileCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobPostingInput = {
    id?: number
    jobSeekerId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobPostingInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput>
  }

  export type JobApplicationCreateManyJobPostingInputEnvelope = {
    data: JobApplicationCreateManyJobPostingInput | JobApplicationCreateManyJobPostingInput[]
    skipDuplicates?: boolean
  }

  export type CompanyProfileCreateWithoutJobPostsInput = {
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyProfileInput
  }

  export type CompanyProfileUncheckedCreateWithoutJobPostsInput = {
    id?: number
    userId: number
    companyName: string
    industry?: string | null
    companySize?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyProfileCreateOrConnectWithoutJobPostsInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutJobPostsInput, CompanyProfileUncheckedCreateWithoutJobPostsInput>
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobPostingInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobPostingInput, JobApplicationUncheckedUpdateWithoutJobPostingInput>
    create: XOR<JobApplicationCreateWithoutJobPostingInput, JobApplicationUncheckedCreateWithoutJobPostingInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobPostingInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobPostingInput, JobApplicationUncheckedUpdateWithoutJobPostingInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobPostingInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobPostingInput>
  }

  export type CompanyProfileUpsertWithoutJobPostsInput = {
    update: XOR<CompanyProfileUpdateWithoutJobPostsInput, CompanyProfileUncheckedUpdateWithoutJobPostsInput>
    create: XOR<CompanyProfileCreateWithoutJobPostsInput, CompanyProfileUncheckedCreateWithoutJobPostsInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutJobPostsInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutJobPostsInput, CompanyProfileUncheckedUpdateWithoutJobPostsInput>
  }

  export type CompanyProfileUpdateWithoutJobPostsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutJobPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateWithoutApplicationsInput = {
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutJobPostsInput
  }

  export type JobPostingUncheckedCreateWithoutApplicationsInput = {
    id?: number
    companyId: number
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingCreateOrConnectWithoutApplicationsInput = {
    where: JobPostingWhereUniqueInput
    create: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
  }

  export type JobSeekerProfileCreateWithoutApplicationsInput = {
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJobSeekerProfileInput
  }

  export type JobSeekerProfileUncheckedCreateWithoutApplicationsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    jobTitle?: string | null
    location?: string | null
    resumeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobSeekerProfileCreateOrConnectWithoutApplicationsInput = {
    where: JobSeekerProfileWhereUniqueInput
    create: XOR<JobSeekerProfileCreateWithoutApplicationsInput, JobSeekerProfileUncheckedCreateWithoutApplicationsInput>
  }

  export type JobPostingUpsertWithoutApplicationsInput = {
    update: XOR<JobPostingUpdateWithoutApplicationsInput, JobPostingUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobPostingCreateWithoutApplicationsInput, JobPostingUncheckedCreateWithoutApplicationsInput>
    where?: JobPostingWhereInput
  }

  export type JobPostingUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobPostingWhereInput
    data: XOR<JobPostingUpdateWithoutApplicationsInput, JobPostingUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobPostingUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutJobPostsNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSeekerProfileUpsertWithoutApplicationsInput = {
    update: XOR<JobSeekerProfileUpdateWithoutApplicationsInput, JobSeekerProfileUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobSeekerProfileCreateWithoutApplicationsInput, JobSeekerProfileUncheckedCreateWithoutApplicationsInput>
    where?: JobSeekerProfileWhereInput
  }

  export type JobSeekerProfileUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobSeekerProfileWhereInput
    data: XOR<JobSeekerProfileUpdateWithoutApplicationsInput, JobSeekerProfileUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobSeekerProfileUpdateWithoutApplicationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobSeekerProfileNestedInput
  }

  export type JobSeekerProfileUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobSeekerInput = {
    id?: number
    jobPostingId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobSeekerInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPosting?: JobPostingUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobSeekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobPostingId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobSeekerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobPostingId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateManyCompanyInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    employment?: string | null
    salaryMin?: number | null
    salaryMax?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostingUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobPostingNestedInput
  }

  export type JobPostingUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    employment?: NullableStringFieldUpdateOperationsInput | string | null
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobPostingInput = {
    id?: number
    jobSeekerId: number
    status?: $Enums.ApplicationStatus
    coverLetter?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobPostingInput = {
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobSeeker?: JobSeekerProfileUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobPostingInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobSeekerId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobPostingInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobSeekerId?: IntFieldUpdateOperationsInput | number
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}