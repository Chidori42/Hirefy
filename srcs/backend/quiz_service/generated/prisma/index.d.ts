
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
 * Model Mcq
 * 
 */
export type Mcq = $Result.DefaultSelection<Prisma.$McqPayload>
/**
 * Model CodeChallenge
 * 
 */
export type CodeChallenge = $Result.DefaultSelection<Prisma.$CodeChallengePayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TestType: {
  QUIZ: 'QUIZ',
  CODE: 'CODE'
};

export type TestType = (typeof TestType)[keyof typeof TestType]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type TestType = $Enums.TestType

export const TestType: typeof $Enums.TestType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Mcqs
 * const mcqs = await prisma.mcq.findMany()
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
   * // Fetch zero or more Mcqs
   * const mcqs = await prisma.mcq.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mcq`: Exposes CRUD operations for the **Mcq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mcqs
    * const mcqs = await prisma.mcq.findMany()
    * ```
    */
  get mcq(): Prisma.McqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeChallenge`: Exposes CRUD operations for the **CodeChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeChallenges
    * const codeChallenges = await prisma.codeChallenge.findMany()
    * ```
    */
  get codeChallenge(): Prisma.CodeChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Mcq: 'Mcq',
    CodeChallenge: 'CodeChallenge',
    Test: 'Test'
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
      modelProps: "mcq" | "codeChallenge" | "test"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mcq: {
        payload: Prisma.$McqPayload<ExtArgs>
        fields: Prisma.McqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          findFirst: {
            args: Prisma.McqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          findMany: {
            args: Prisma.McqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>[]
          }
          create: {
            args: Prisma.McqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          createMany: {
            args: Prisma.McqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.McqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          update: {
            args: Prisma.McqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          deleteMany: {
            args: Prisma.McqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.McqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McqPayload>
          }
          aggregate: {
            args: Prisma.McqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcq>
          }
          groupBy: {
            args: Prisma.McqGroupByArgs<ExtArgs>
            result: $Utils.Optional<McqGroupByOutputType>[]
          }
          count: {
            args: Prisma.McqCountArgs<ExtArgs>
            result: $Utils.Optional<McqCountAggregateOutputType> | number
          }
        }
      }
      CodeChallenge: {
        payload: Prisma.$CodeChallengePayload<ExtArgs>
        fields: Prisma.CodeChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          findFirst: {
            args: Prisma.CodeChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          findMany: {
            args: Prisma.CodeChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>[]
          }
          create: {
            args: Prisma.CodeChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          createMany: {
            args: Prisma.CodeChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CodeChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          update: {
            args: Prisma.CodeChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          deleteMany: {
            args: Prisma.CodeChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodeChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeChallengePayload>
          }
          aggregate: {
            args: Prisma.CodeChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeChallenge>
          }
          groupBy: {
            args: Prisma.CodeChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeChallengeCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    mcq?: McqOmit
    codeChallenge?: CodeChallengeOmit
    test?: TestOmit
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
   * Count Type McqCountOutputType
   */

  export type McqCountOutputType = {
    tests: number
  }

  export type McqCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | McqCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * McqCountOutputType without action
   */
  export type McqCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqCountOutputType
     */
    select?: McqCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * McqCountOutputType without action
   */
  export type McqCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type CodeChallengeCountOutputType
   */

  export type CodeChallengeCountOutputType = {
    tests: number
  }

  export type CodeChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | CodeChallengeCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * CodeChallengeCountOutputType without action
   */
  export type CodeChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallengeCountOutputType
     */
    select?: CodeChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodeChallengeCountOutputType without action
   */
  export type CodeChallengeCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    mcqs: number
    codeChallenges: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcqs?: boolean | TestCountOutputTypeCountMcqsArgs
    codeChallenges?: boolean | TestCountOutputTypeCountCodeChallengesArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountMcqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McqWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountCodeChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeChallengeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mcq
   */

  export type AggregateMcq = {
    _count: McqCountAggregateOutputType | null
    _avg: McqAvgAggregateOutputType | null
    _sum: McqSumAggregateOutputType | null
    _min: McqMinAggregateOutputType | null
    _max: McqMaxAggregateOutputType | null
  }

  export type McqAvgAggregateOutputType = {
    points: number | null
  }

  export type McqSumAggregateOutputType = {
    points: number | null
  }

  export type McqMinAggregateOutputType = {
    id: string | null
    question: string | null
    points: number | null
    explanation: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type McqMaxAggregateOutputType = {
    id: string | null
    question: string | null
    points: number | null
    explanation: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type McqCountAggregateOutputType = {
    id: number
    question: number
    choices: number
    points: number
    explanation: number
    category: number
    difficulty: number
    tags: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type McqAvgAggregateInputType = {
    points?: true
  }

  export type McqSumAggregateInputType = {
    points?: true
  }

  export type McqMinAggregateInputType = {
    id?: true
    question?: true
    points?: true
    explanation?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type McqMaxAggregateInputType = {
    id?: true
    question?: true
    points?: true
    explanation?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type McqCountAggregateInputType = {
    id?: true
    question?: true
    choices?: true
    points?: true
    explanation?: true
    category?: true
    difficulty?: true
    tags?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type McqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mcq to aggregate.
     */
    where?: McqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcqs to fetch.
     */
    orderBy?: McqOrderByWithRelationInput | McqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mcqs
    **/
    _count?: true | McqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: McqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: McqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McqMaxAggregateInputType
  }

  export type GetMcqAggregateType<T extends McqAggregateArgs> = {
        [P in keyof T & keyof AggregateMcq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcq[P]>
      : GetScalarType<T[P], AggregateMcq[P]>
  }




  export type McqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McqWhereInput
    orderBy?: McqOrderByWithAggregationInput | McqOrderByWithAggregationInput[]
    by: McqScalarFieldEnum[] | McqScalarFieldEnum
    having?: McqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McqCountAggregateInputType | true
    _avg?: McqAvgAggregateInputType
    _sum?: McqSumAggregateInputType
    _min?: McqMinAggregateInputType
    _max?: McqMaxAggregateInputType
  }

  export type McqGroupByOutputType = {
    id: string
    question: string
    choices: JsonValue
    points: number
    explanation: string | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    tags: JsonValue | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: McqCountAggregateOutputType | null
    _avg: McqAvgAggregateOutputType | null
    _sum: McqSumAggregateOutputType | null
    _min: McqMinAggregateOutputType | null
    _max: McqMaxAggregateOutputType | null
  }

  type GetMcqGroupByPayload<T extends McqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McqGroupByOutputType[P]>
            : GetScalarType<T[P], McqGroupByOutputType[P]>
        }
      >
    >


  export type McqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    choices?: boolean
    points?: boolean
    explanation?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tests?: boolean | Mcq$testsArgs<ExtArgs>
    _count?: boolean | McqCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcq"]>



  export type McqSelectScalar = {
    id?: boolean
    question?: boolean
    choices?: boolean
    points?: boolean
    explanation?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type McqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "choices" | "points" | "explanation" | "category" | "difficulty" | "tags" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["mcq"]>
  export type McqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | Mcq$testsArgs<ExtArgs>
    _count?: boolean | McqCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $McqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mcq"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      choices: Prisma.JsonValue
      points: number
      explanation: string | null
      category: string | null
      difficulty: $Enums.Difficulty | null
      tags: Prisma.JsonValue | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mcq"]>
    composites: {}
  }

  type McqGetPayload<S extends boolean | null | undefined | McqDefaultArgs> = $Result.GetResult<Prisma.$McqPayload, S>

  type McqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McqCountAggregateInputType | true
    }

  export interface McqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mcq'], meta: { name: 'Mcq' } }
    /**
     * Find zero or one Mcq that matches the filter.
     * @param {McqFindUniqueArgs} args - Arguments to find a Mcq
     * @example
     * // Get one Mcq
     * const mcq = await prisma.mcq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McqFindUniqueArgs>(args: SelectSubset<T, McqFindUniqueArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mcq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McqFindUniqueOrThrowArgs} args - Arguments to find a Mcq
     * @example
     * // Get one Mcq
     * const mcq = await prisma.mcq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McqFindUniqueOrThrowArgs>(args: SelectSubset<T, McqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mcq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqFindFirstArgs} args - Arguments to find a Mcq
     * @example
     * // Get one Mcq
     * const mcq = await prisma.mcq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McqFindFirstArgs>(args?: SelectSubset<T, McqFindFirstArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mcq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqFindFirstOrThrowArgs} args - Arguments to find a Mcq
     * @example
     * // Get one Mcq
     * const mcq = await prisma.mcq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McqFindFirstOrThrowArgs>(args?: SelectSubset<T, McqFindFirstOrThrowArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mcqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mcqs
     * const mcqs = await prisma.mcq.findMany()
     * 
     * // Get first 10 Mcqs
     * const mcqs = await prisma.mcq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mcqWithIdOnly = await prisma.mcq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends McqFindManyArgs>(args?: SelectSubset<T, McqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mcq.
     * @param {McqCreateArgs} args - Arguments to create a Mcq.
     * @example
     * // Create one Mcq
     * const Mcq = await prisma.mcq.create({
     *   data: {
     *     // ... data to create a Mcq
     *   }
     * })
     * 
     */
    create<T extends McqCreateArgs>(args: SelectSubset<T, McqCreateArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mcqs.
     * @param {McqCreateManyArgs} args - Arguments to create many Mcqs.
     * @example
     * // Create many Mcqs
     * const mcq = await prisma.mcq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McqCreateManyArgs>(args?: SelectSubset<T, McqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mcq.
     * @param {McqDeleteArgs} args - Arguments to delete one Mcq.
     * @example
     * // Delete one Mcq
     * const Mcq = await prisma.mcq.delete({
     *   where: {
     *     // ... filter to delete one Mcq
     *   }
     * })
     * 
     */
    delete<T extends McqDeleteArgs>(args: SelectSubset<T, McqDeleteArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mcq.
     * @param {McqUpdateArgs} args - Arguments to update one Mcq.
     * @example
     * // Update one Mcq
     * const mcq = await prisma.mcq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McqUpdateArgs>(args: SelectSubset<T, McqUpdateArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mcqs.
     * @param {McqDeleteManyArgs} args - Arguments to filter Mcqs to delete.
     * @example
     * // Delete a few Mcqs
     * const { count } = await prisma.mcq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McqDeleteManyArgs>(args?: SelectSubset<T, McqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mcqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mcqs
     * const mcq = await prisma.mcq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McqUpdateManyArgs>(args: SelectSubset<T, McqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mcq.
     * @param {McqUpsertArgs} args - Arguments to update or create a Mcq.
     * @example
     * // Update or create a Mcq
     * const mcq = await prisma.mcq.upsert({
     *   create: {
     *     // ... data to create a Mcq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mcq we want to update
     *   }
     * })
     */
    upsert<T extends McqUpsertArgs>(args: SelectSubset<T, McqUpsertArgs<ExtArgs>>): Prisma__McqClient<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mcqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqCountArgs} args - Arguments to filter Mcqs to count.
     * @example
     * // Count the number of Mcqs
     * const count = await prisma.mcq.count({
     *   where: {
     *     // ... the filter for the Mcqs we want to count
     *   }
     * })
    **/
    count<T extends McqCountArgs>(
      args?: Subset<T, McqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mcq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends McqAggregateArgs>(args: Subset<T, McqAggregateArgs>): Prisma.PrismaPromise<GetMcqAggregateType<T>>

    /**
     * Group by Mcq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqGroupByArgs} args - Group by arguments.
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
      T extends McqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McqGroupByArgs['orderBy'] }
        : { orderBy?: McqGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, McqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mcq model
   */
  readonly fields: McqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mcq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends Mcq$testsArgs<ExtArgs> = {}>(args?: Subset<T, Mcq$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mcq model
   */
  interface McqFieldRefs {
    readonly id: FieldRef<"Mcq", 'String'>
    readonly question: FieldRef<"Mcq", 'String'>
    readonly choices: FieldRef<"Mcq", 'Json'>
    readonly points: FieldRef<"Mcq", 'Int'>
    readonly explanation: FieldRef<"Mcq", 'String'>
    readonly category: FieldRef<"Mcq", 'String'>
    readonly difficulty: FieldRef<"Mcq", 'Difficulty'>
    readonly tags: FieldRef<"Mcq", 'Json'>
    readonly isPublished: FieldRef<"Mcq", 'Boolean'>
    readonly createdAt: FieldRef<"Mcq", 'DateTime'>
    readonly updatedAt: FieldRef<"Mcq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mcq findUnique
   */
  export type McqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter, which Mcq to fetch.
     */
    where: McqWhereUniqueInput
  }

  /**
   * Mcq findUniqueOrThrow
   */
  export type McqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter, which Mcq to fetch.
     */
    where: McqWhereUniqueInput
  }

  /**
   * Mcq findFirst
   */
  export type McqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter, which Mcq to fetch.
     */
    where?: McqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcqs to fetch.
     */
    orderBy?: McqOrderByWithRelationInput | McqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mcqs.
     */
    cursor?: McqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mcqs.
     */
    distinct?: McqScalarFieldEnum | McqScalarFieldEnum[]
  }

  /**
   * Mcq findFirstOrThrow
   */
  export type McqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter, which Mcq to fetch.
     */
    where?: McqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcqs to fetch.
     */
    orderBy?: McqOrderByWithRelationInput | McqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mcqs.
     */
    cursor?: McqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mcqs.
     */
    distinct?: McqScalarFieldEnum | McqScalarFieldEnum[]
  }

  /**
   * Mcq findMany
   */
  export type McqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter, which Mcqs to fetch.
     */
    where?: McqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcqs to fetch.
     */
    orderBy?: McqOrderByWithRelationInput | McqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mcqs.
     */
    cursor?: McqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcqs.
     */
    skip?: number
    distinct?: McqScalarFieldEnum | McqScalarFieldEnum[]
  }

  /**
   * Mcq create
   */
  export type McqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * The data needed to create a Mcq.
     */
    data: XOR<McqCreateInput, McqUncheckedCreateInput>
  }

  /**
   * Mcq createMany
   */
  export type McqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mcqs.
     */
    data: McqCreateManyInput | McqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mcq update
   */
  export type McqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * The data needed to update a Mcq.
     */
    data: XOR<McqUpdateInput, McqUncheckedUpdateInput>
    /**
     * Choose, which Mcq to update.
     */
    where: McqWhereUniqueInput
  }

  /**
   * Mcq updateMany
   */
  export type McqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mcqs.
     */
    data: XOR<McqUpdateManyMutationInput, McqUncheckedUpdateManyInput>
    /**
     * Filter which Mcqs to update
     */
    where?: McqWhereInput
    /**
     * Limit how many Mcqs to update.
     */
    limit?: number
  }

  /**
   * Mcq upsert
   */
  export type McqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * The filter to search for the Mcq to update in case it exists.
     */
    where: McqWhereUniqueInput
    /**
     * In case the Mcq found by the `where` argument doesn't exist, create a new Mcq with this data.
     */
    create: XOR<McqCreateInput, McqUncheckedCreateInput>
    /**
     * In case the Mcq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McqUpdateInput, McqUncheckedUpdateInput>
  }

  /**
   * Mcq delete
   */
  export type McqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    /**
     * Filter which Mcq to delete.
     */
    where: McqWhereUniqueInput
  }

  /**
   * Mcq deleteMany
   */
  export type McqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mcqs to delete
     */
    where?: McqWhereInput
    /**
     * Limit how many Mcqs to delete.
     */
    limit?: number
  }

  /**
   * Mcq.tests
   */
  export type Mcq$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Mcq without action
   */
  export type McqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
  }


  /**
   * Model CodeChallenge
   */

  export type AggregateCodeChallenge = {
    _count: CodeChallengeCountAggregateOutputType | null
    _avg: CodeChallengeAvgAggregateOutputType | null
    _sum: CodeChallengeSumAggregateOutputType | null
    _min: CodeChallengeMinAggregateOutputType | null
    _max: CodeChallengeMaxAggregateOutputType | null
  }

  export type CodeChallengeAvgAggregateOutputType = {
    timeLimit: number | null
    memoryLimit: number | null
    totalPoints: number | null
  }

  export type CodeChallengeSumAggregateOutputType = {
    timeLimit: number | null
    memoryLimit: number | null
    totalPoints: number | null
  }

  export type CodeChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starterCode: string | null
    language: string | null
    timeLimit: number | null
    memoryLimit: number | null
    totalPoints: number | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    starterCode: string | null
    language: string | null
    timeLimit: number | null
    memoryLimit: number | null
    totalPoints: number | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    starterCode: number
    language: number
    testCases: number
    timeLimit: number
    memoryLimit: number
    totalPoints: number
    hints: number
    category: number
    difficulty: number
    tags: number
    isPublished: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodeChallengeAvgAggregateInputType = {
    timeLimit?: true
    memoryLimit?: true
    totalPoints?: true
  }

  export type CodeChallengeSumAggregateInputType = {
    timeLimit?: true
    memoryLimit?: true
    totalPoints?: true
  }

  export type CodeChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starterCode?: true
    language?: true
    timeLimit?: true
    memoryLimit?: true
    totalPoints?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starterCode?: true
    language?: true
    timeLimit?: true
    memoryLimit?: true
    totalPoints?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    starterCode?: true
    language?: true
    testCases?: true
    timeLimit?: true
    memoryLimit?: true
    totalPoints?: true
    hints?: true
    category?: true
    difficulty?: true
    tags?: true
    isPublished?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodeChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeChallenge to aggregate.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeChallenges
    **/
    _count?: true | CodeChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeChallengeMaxAggregateInputType
  }

  export type GetCodeChallengeAggregateType<T extends CodeChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeChallenge[P]>
      : GetScalarType<T[P], AggregateCodeChallenge[P]>
  }




  export type CodeChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeChallengeWhereInput
    orderBy?: CodeChallengeOrderByWithAggregationInput | CodeChallengeOrderByWithAggregationInput[]
    by: CodeChallengeScalarFieldEnum[] | CodeChallengeScalarFieldEnum
    having?: CodeChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeChallengeCountAggregateInputType | true
    _avg?: CodeChallengeAvgAggregateInputType
    _sum?: CodeChallengeSumAggregateInputType
    _min?: CodeChallengeMinAggregateInputType
    _max?: CodeChallengeMaxAggregateInputType
  }

  export type CodeChallengeGroupByOutputType = {
    id: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonValue
    timeLimit: number
    memoryLimit: number
    totalPoints: number
    hints: JsonValue | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    tags: JsonValue | null
    isPublished: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: CodeChallengeCountAggregateOutputType | null
    _avg: CodeChallengeAvgAggregateOutputType | null
    _sum: CodeChallengeSumAggregateOutputType | null
    _min: CodeChallengeMinAggregateOutputType | null
    _max: CodeChallengeMaxAggregateOutputType | null
  }

  type GetCodeChallengeGroupByPayload<T extends CodeChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeChallengeGroupByOutputType[P]>
        }
      >
    >


  export type CodeChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    starterCode?: boolean
    language?: boolean
    testCases?: boolean
    timeLimit?: boolean
    memoryLimit?: boolean
    totalPoints?: boolean
    hints?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tests?: boolean | CodeChallenge$testsArgs<ExtArgs>
    _count?: boolean | CodeChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codeChallenge"]>



  export type CodeChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    starterCode?: boolean
    language?: boolean
    testCases?: boolean
    timeLimit?: boolean
    memoryLimit?: boolean
    totalPoints?: boolean
    hints?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodeChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "starterCode" | "language" | "testCases" | "timeLimit" | "memoryLimit" | "totalPoints" | "hints" | "category" | "difficulty" | "tags" | "isPublished" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["codeChallenge"]>
  export type CodeChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tests?: boolean | CodeChallenge$testsArgs<ExtArgs>
    _count?: boolean | CodeChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CodeChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeChallenge"
    objects: {
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      starterCode: string
      language: string
      testCases: Prisma.JsonValue
      timeLimit: number
      memoryLimit: number
      totalPoints: number
      hints: Prisma.JsonValue | null
      category: string | null
      difficulty: $Enums.Difficulty | null
      tags: Prisma.JsonValue | null
      isPublished: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["codeChallenge"]>
    composites: {}
  }

  type CodeChallengeGetPayload<S extends boolean | null | undefined | CodeChallengeDefaultArgs> = $Result.GetResult<Prisma.$CodeChallengePayload, S>

  type CodeChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeChallengeCountAggregateInputType | true
    }

  export interface CodeChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeChallenge'], meta: { name: 'CodeChallenge' } }
    /**
     * Find zero or one CodeChallenge that matches the filter.
     * @param {CodeChallengeFindUniqueArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeChallengeFindUniqueArgs>(args: SelectSubset<T, CodeChallengeFindUniqueArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeChallengeFindUniqueOrThrowArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindFirstArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeChallengeFindFirstArgs>(args?: SelectSubset<T, CodeChallengeFindFirstArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindFirstOrThrowArgs} args - Arguments to find a CodeChallenge
     * @example
     * // Get one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeChallenges
     * const codeChallenges = await prisma.codeChallenge.findMany()
     * 
     * // Get first 10 CodeChallenges
     * const codeChallenges = await prisma.codeChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeChallengeWithIdOnly = await prisma.codeChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeChallengeFindManyArgs>(args?: SelectSubset<T, CodeChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeChallenge.
     * @param {CodeChallengeCreateArgs} args - Arguments to create a CodeChallenge.
     * @example
     * // Create one CodeChallenge
     * const CodeChallenge = await prisma.codeChallenge.create({
     *   data: {
     *     // ... data to create a CodeChallenge
     *   }
     * })
     * 
     */
    create<T extends CodeChallengeCreateArgs>(args: SelectSubset<T, CodeChallengeCreateArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeChallenges.
     * @param {CodeChallengeCreateManyArgs} args - Arguments to create many CodeChallenges.
     * @example
     * // Create many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeChallengeCreateManyArgs>(args?: SelectSubset<T, CodeChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CodeChallenge.
     * @param {CodeChallengeDeleteArgs} args - Arguments to delete one CodeChallenge.
     * @example
     * // Delete one CodeChallenge
     * const CodeChallenge = await prisma.codeChallenge.delete({
     *   where: {
     *     // ... filter to delete one CodeChallenge
     *   }
     * })
     * 
     */
    delete<T extends CodeChallengeDeleteArgs>(args: SelectSubset<T, CodeChallengeDeleteArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeChallenge.
     * @param {CodeChallengeUpdateArgs} args - Arguments to update one CodeChallenge.
     * @example
     * // Update one CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeChallengeUpdateArgs>(args: SelectSubset<T, CodeChallengeUpdateArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeChallenges.
     * @param {CodeChallengeDeleteManyArgs} args - Arguments to filter CodeChallenges to delete.
     * @example
     * // Delete a few CodeChallenges
     * const { count } = await prisma.codeChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeChallengeDeleteManyArgs>(args?: SelectSubset<T, CodeChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeChallenges
     * const codeChallenge = await prisma.codeChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeChallengeUpdateManyArgs>(args: SelectSubset<T, CodeChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeChallenge.
     * @param {CodeChallengeUpsertArgs} args - Arguments to update or create a CodeChallenge.
     * @example
     * // Update or create a CodeChallenge
     * const codeChallenge = await prisma.codeChallenge.upsert({
     *   create: {
     *     // ... data to create a CodeChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeChallenge we want to update
     *   }
     * })
     */
    upsert<T extends CodeChallengeUpsertArgs>(args: SelectSubset<T, CodeChallengeUpsertArgs<ExtArgs>>): Prisma__CodeChallengeClient<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeCountArgs} args - Arguments to filter CodeChallenges to count.
     * @example
     * // Count the number of CodeChallenges
     * const count = await prisma.codeChallenge.count({
     *   where: {
     *     // ... the filter for the CodeChallenges we want to count
     *   }
     * })
    **/
    count<T extends CodeChallengeCountArgs>(
      args?: Subset<T, CodeChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeChallengeAggregateArgs>(args: Subset<T, CodeChallengeAggregateArgs>): Prisma.PrismaPromise<GetCodeChallengeAggregateType<T>>

    /**
     * Group by CodeChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeChallengeGroupByArgs} args - Group by arguments.
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
      T extends CodeChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeChallengeGroupByArgs['orderBy'] }
        : { orderBy?: CodeChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeChallenge model
   */
  readonly fields: CodeChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tests<T extends CodeChallenge$testsArgs<ExtArgs> = {}>(args?: Subset<T, CodeChallenge$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CodeChallenge model
   */
  interface CodeChallengeFieldRefs {
    readonly id: FieldRef<"CodeChallenge", 'String'>
    readonly title: FieldRef<"CodeChallenge", 'String'>
    readonly description: FieldRef<"CodeChallenge", 'String'>
    readonly starterCode: FieldRef<"CodeChallenge", 'String'>
    readonly language: FieldRef<"CodeChallenge", 'String'>
    readonly testCases: FieldRef<"CodeChallenge", 'Json'>
    readonly timeLimit: FieldRef<"CodeChallenge", 'Int'>
    readonly memoryLimit: FieldRef<"CodeChallenge", 'Int'>
    readonly totalPoints: FieldRef<"CodeChallenge", 'Int'>
    readonly hints: FieldRef<"CodeChallenge", 'Json'>
    readonly category: FieldRef<"CodeChallenge", 'String'>
    readonly difficulty: FieldRef<"CodeChallenge", 'Difficulty'>
    readonly tags: FieldRef<"CodeChallenge", 'Json'>
    readonly isPublished: FieldRef<"CodeChallenge", 'Boolean'>
    readonly createdBy: FieldRef<"CodeChallenge", 'String'>
    readonly createdAt: FieldRef<"CodeChallenge", 'DateTime'>
    readonly updatedAt: FieldRef<"CodeChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeChallenge findUnique
   */
  export type CodeChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge findUniqueOrThrow
   */
  export type CodeChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge findFirst
   */
  export type CodeChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeChallenges.
     */
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge findFirstOrThrow
   */
  export type CodeChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenge to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeChallenges.
     */
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge findMany
   */
  export type CodeChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CodeChallenges to fetch.
     */
    where?: CodeChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeChallenges to fetch.
     */
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeChallenges.
     */
    cursor?: CodeChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeChallenges.
     */
    skip?: number
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * CodeChallenge create
   */
  export type CodeChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a CodeChallenge.
     */
    data: XOR<CodeChallengeCreateInput, CodeChallengeUncheckedCreateInput>
  }

  /**
   * CodeChallenge createMany
   */
  export type CodeChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeChallenges.
     */
    data: CodeChallengeCreateManyInput | CodeChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeChallenge update
   */
  export type CodeChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a CodeChallenge.
     */
    data: XOR<CodeChallengeUpdateInput, CodeChallengeUncheckedUpdateInput>
    /**
     * Choose, which CodeChallenge to update.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge updateMany
   */
  export type CodeChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeChallenges.
     */
    data: XOR<CodeChallengeUpdateManyMutationInput, CodeChallengeUncheckedUpdateManyInput>
    /**
     * Filter which CodeChallenges to update
     */
    where?: CodeChallengeWhereInput
    /**
     * Limit how many CodeChallenges to update.
     */
    limit?: number
  }

  /**
   * CodeChallenge upsert
   */
  export type CodeChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the CodeChallenge to update in case it exists.
     */
    where: CodeChallengeWhereUniqueInput
    /**
     * In case the CodeChallenge found by the `where` argument doesn't exist, create a new CodeChallenge with this data.
     */
    create: XOR<CodeChallengeCreateInput, CodeChallengeUncheckedCreateInput>
    /**
     * In case the CodeChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeChallengeUpdateInput, CodeChallengeUncheckedUpdateInput>
  }

  /**
   * CodeChallenge delete
   */
  export type CodeChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    /**
     * Filter which CodeChallenge to delete.
     */
    where: CodeChallengeWhereUniqueInput
  }

  /**
   * CodeChallenge deleteMany
   */
  export type CodeChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeChallenges to delete
     */
    where?: CodeChallengeWhereInput
    /**
     * Limit how many CodeChallenges to delete.
     */
    limit?: number
  }

  /**
   * CodeChallenge.tests
   */
  export type CodeChallenge$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * CodeChallenge without action
   */
  export type CodeChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    durationMinutes: number | null
    passingScore: number | null
  }

  export type TestSumAggregateOutputType = {
    durationMinutes: number | null
    passingScore: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    type: $Enums.TestType | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    passingScore: number | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TestType | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    passingScore: number | null
    category: string | null
    difficulty: $Enums.Difficulty | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    durationMinutes: number
    passingScore: number
    category: number
    difficulty: number
    tags: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    durationMinutes?: true
    passingScore?: true
  }

  export type TestSumAggregateInputType = {
    durationMinutes?: true
    passingScore?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    durationMinutes?: true
    passingScore?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    durationMinutes?: true
    passingScore?: true
    category?: true
    difficulty?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    durationMinutes?: true
    passingScore?: true
    category?: true
    difficulty?: true
    tags?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    type: $Enums.TestType
    title: string
    description: string | null
    durationMinutes: number
    passingScore: number
    category: string | null
    difficulty: $Enums.Difficulty | null
    tags: JsonValue | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    passingScore?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mcqs?: boolean | Test$mcqsArgs<ExtArgs>
    codeChallenges?: boolean | Test$codeChallengesArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>



  export type TestSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    passingScore?: boolean
    category?: boolean
    difficulty?: boolean
    tags?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "durationMinutes" | "passingScore" | "category" | "difficulty" | "tags" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcqs?: boolean | Test$mcqsArgs<ExtArgs>
    codeChallenges?: boolean | Test$codeChallengesArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      mcqs: Prisma.$McqPayload<ExtArgs>[]
      codeChallenges: Prisma.$CodeChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TestType
      title: string
      description: string | null
      durationMinutes: number
      passingScore: number
      category: string | null
      difficulty: $Enums.Difficulty | null
      tags: Prisma.JsonValue | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mcqs<T extends Test$mcqsArgs<ExtArgs> = {}>(args?: Subset<T, Test$mcqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    codeChallenges<T extends Test$codeChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Test$codeChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly type: FieldRef<"Test", 'TestType'>
    readonly title: FieldRef<"Test", 'String'>
    readonly description: FieldRef<"Test", 'String'>
    readonly durationMinutes: FieldRef<"Test", 'Int'>
    readonly passingScore: FieldRef<"Test", 'Int'>
    readonly category: FieldRef<"Test", 'String'>
    readonly difficulty: FieldRef<"Test", 'Difficulty'>
    readonly tags: FieldRef<"Test", 'Json'>
    readonly isPublished: FieldRef<"Test", 'Boolean'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.mcqs
   */
  export type Test$mcqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcq
     */
    select?: McqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcq
     */
    omit?: McqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McqInclude<ExtArgs> | null
    where?: McqWhereInput
    orderBy?: McqOrderByWithRelationInput | McqOrderByWithRelationInput[]
    cursor?: McqWhereUniqueInput
    take?: number
    skip?: number
    distinct?: McqScalarFieldEnum | McqScalarFieldEnum[]
  }

  /**
   * Test.codeChallenges
   */
  export type Test$codeChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeChallenge
     */
    select?: CodeChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeChallenge
     */
    omit?: CodeChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeChallengeInclude<ExtArgs> | null
    where?: CodeChallengeWhereInput
    orderBy?: CodeChallengeOrderByWithRelationInput | CodeChallengeOrderByWithRelationInput[]
    cursor?: CodeChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeChallengeScalarFieldEnum | CodeChallengeScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
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


  export const McqScalarFieldEnum: {
    id: 'id',
    question: 'question',
    choices: 'choices',
    points: 'points',
    explanation: 'explanation',
    category: 'category',
    difficulty: 'difficulty',
    tags: 'tags',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type McqScalarFieldEnum = (typeof McqScalarFieldEnum)[keyof typeof McqScalarFieldEnum]


  export const CodeChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    starterCode: 'starterCode',
    language: 'language',
    testCases: 'testCases',
    timeLimit: 'timeLimit',
    memoryLimit: 'memoryLimit',
    totalPoints: 'totalPoints',
    hints: 'hints',
    category: 'category',
    difficulty: 'difficulty',
    tags: 'tags',
    isPublished: 'isPublished',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodeChallengeScalarFieldEnum = (typeof CodeChallengeScalarFieldEnum)[keyof typeof CodeChallengeScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    durationMinutes: 'durationMinutes',
    passingScore: 'passingScore',
    category: 'category',
    difficulty: 'difficulty',
    tags: 'tags',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const McqOrderByRelevanceFieldEnum: {
    id: 'id',
    question: 'question',
    explanation: 'explanation',
    category: 'category'
  };

  export type McqOrderByRelevanceFieldEnum = (typeof McqOrderByRelevanceFieldEnum)[keyof typeof McqOrderByRelevanceFieldEnum]


  export const CodeChallengeOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    starterCode: 'starterCode',
    language: 'language',
    category: 'category',
    createdBy: 'createdBy'
  };

  export type CodeChallengeOrderByRelevanceFieldEnum = (typeof CodeChallengeOrderByRelevanceFieldEnum)[keyof typeof CodeChallengeOrderByRelevanceFieldEnum]


  export const TestOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category'
  };

  export type TestOrderByRelevanceFieldEnum = (typeof TestOrderByRelevanceFieldEnum)[keyof typeof TestOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TestType'
   */
  export type EnumTestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type McqWhereInput = {
    AND?: McqWhereInput | McqWhereInput[]
    OR?: McqWhereInput[]
    NOT?: McqWhereInput | McqWhereInput[]
    id?: StringFilter<"Mcq"> | string
    question?: StringFilter<"Mcq"> | string
    choices?: JsonFilter<"Mcq">
    points?: IntFilter<"Mcq"> | number
    explanation?: StringNullableFilter<"Mcq"> | string | null
    category?: StringNullableFilter<"Mcq"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Mcq"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Mcq">
    isPublished?: BoolFilter<"Mcq"> | boolean
    createdAt?: DateTimeFilter<"Mcq"> | Date | string
    updatedAt?: DateTimeFilter<"Mcq"> | Date | string
    tests?: TestListRelationFilter
  }

  export type McqOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    choices?: SortOrder
    points?: SortOrder
    explanation?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tests?: TestOrderByRelationAggregateInput
    _relevance?: McqOrderByRelevanceInput
  }

  export type McqWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: McqWhereInput | McqWhereInput[]
    OR?: McqWhereInput[]
    NOT?: McqWhereInput | McqWhereInput[]
    question?: StringFilter<"Mcq"> | string
    choices?: JsonFilter<"Mcq">
    points?: IntFilter<"Mcq"> | number
    explanation?: StringNullableFilter<"Mcq"> | string | null
    category?: StringNullableFilter<"Mcq"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Mcq"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Mcq">
    isPublished?: BoolFilter<"Mcq"> | boolean
    createdAt?: DateTimeFilter<"Mcq"> | Date | string
    updatedAt?: DateTimeFilter<"Mcq"> | Date | string
    tests?: TestListRelationFilter
  }, "id">

  export type McqOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    choices?: SortOrder
    points?: SortOrder
    explanation?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: McqCountOrderByAggregateInput
    _avg?: McqAvgOrderByAggregateInput
    _max?: McqMaxOrderByAggregateInput
    _min?: McqMinOrderByAggregateInput
    _sum?: McqSumOrderByAggregateInput
  }

  export type McqScalarWhereWithAggregatesInput = {
    AND?: McqScalarWhereWithAggregatesInput | McqScalarWhereWithAggregatesInput[]
    OR?: McqScalarWhereWithAggregatesInput[]
    NOT?: McqScalarWhereWithAggregatesInput | McqScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mcq"> | string
    question?: StringWithAggregatesFilter<"Mcq"> | string
    choices?: JsonWithAggregatesFilter<"Mcq">
    points?: IntWithAggregatesFilter<"Mcq"> | number
    explanation?: StringNullableWithAggregatesFilter<"Mcq"> | string | null
    category?: StringNullableWithAggregatesFilter<"Mcq"> | string | null
    difficulty?: EnumDifficultyNullableWithAggregatesFilter<"Mcq"> | $Enums.Difficulty | null
    tags?: JsonNullableWithAggregatesFilter<"Mcq">
    isPublished?: BoolWithAggregatesFilter<"Mcq"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Mcq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mcq"> | Date | string
  }

  export type CodeChallengeWhereInput = {
    AND?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    OR?: CodeChallengeWhereInput[]
    NOT?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    id?: StringFilter<"CodeChallenge"> | string
    title?: StringFilter<"CodeChallenge"> | string
    description?: StringFilter<"CodeChallenge"> | string
    starterCode?: StringFilter<"CodeChallenge"> | string
    language?: StringFilter<"CodeChallenge"> | string
    testCases?: JsonFilter<"CodeChallenge">
    timeLimit?: IntFilter<"CodeChallenge"> | number
    memoryLimit?: IntFilter<"CodeChallenge"> | number
    totalPoints?: IntFilter<"CodeChallenge"> | number
    hints?: JsonNullableFilter<"CodeChallenge">
    category?: StringNullableFilter<"CodeChallenge"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"CodeChallenge"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"CodeChallenge">
    isPublished?: BoolFilter<"CodeChallenge"> | boolean
    createdBy?: StringFilter<"CodeChallenge"> | string
    createdAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    tests?: TestListRelationFilter
  }

  export type CodeChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starterCode?: SortOrder
    language?: SortOrder
    testCases?: SortOrder
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
    hints?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tests?: TestOrderByRelationAggregateInput
    _relevance?: CodeChallengeOrderByRelevanceInput
  }

  export type CodeChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    OR?: CodeChallengeWhereInput[]
    NOT?: CodeChallengeWhereInput | CodeChallengeWhereInput[]
    title?: StringFilter<"CodeChallenge"> | string
    description?: StringFilter<"CodeChallenge"> | string
    starterCode?: StringFilter<"CodeChallenge"> | string
    language?: StringFilter<"CodeChallenge"> | string
    testCases?: JsonFilter<"CodeChallenge">
    timeLimit?: IntFilter<"CodeChallenge"> | number
    memoryLimit?: IntFilter<"CodeChallenge"> | number
    totalPoints?: IntFilter<"CodeChallenge"> | number
    hints?: JsonNullableFilter<"CodeChallenge">
    category?: StringNullableFilter<"CodeChallenge"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"CodeChallenge"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"CodeChallenge">
    isPublished?: BoolFilter<"CodeChallenge"> | boolean
    createdBy?: StringFilter<"CodeChallenge"> | string
    createdAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    tests?: TestListRelationFilter
  }, "id">

  export type CodeChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starterCode?: SortOrder
    language?: SortOrder
    testCases?: SortOrder
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
    hints?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodeChallengeCountOrderByAggregateInput
    _avg?: CodeChallengeAvgOrderByAggregateInput
    _max?: CodeChallengeMaxOrderByAggregateInput
    _min?: CodeChallengeMinOrderByAggregateInput
    _sum?: CodeChallengeSumOrderByAggregateInput
  }

  export type CodeChallengeScalarWhereWithAggregatesInput = {
    AND?: CodeChallengeScalarWhereWithAggregatesInput | CodeChallengeScalarWhereWithAggregatesInput[]
    OR?: CodeChallengeScalarWhereWithAggregatesInput[]
    NOT?: CodeChallengeScalarWhereWithAggregatesInput | CodeChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeChallenge"> | string
    title?: StringWithAggregatesFilter<"CodeChallenge"> | string
    description?: StringWithAggregatesFilter<"CodeChallenge"> | string
    starterCode?: StringWithAggregatesFilter<"CodeChallenge"> | string
    language?: StringWithAggregatesFilter<"CodeChallenge"> | string
    testCases?: JsonWithAggregatesFilter<"CodeChallenge">
    timeLimit?: IntWithAggregatesFilter<"CodeChallenge"> | number
    memoryLimit?: IntWithAggregatesFilter<"CodeChallenge"> | number
    totalPoints?: IntWithAggregatesFilter<"CodeChallenge"> | number
    hints?: JsonNullableWithAggregatesFilter<"CodeChallenge">
    category?: StringNullableWithAggregatesFilter<"CodeChallenge"> | string | null
    difficulty?: EnumDifficultyNullableWithAggregatesFilter<"CodeChallenge"> | $Enums.Difficulty | null
    tags?: JsonNullableWithAggregatesFilter<"CodeChallenge">
    isPublished?: BoolWithAggregatesFilter<"CodeChallenge"> | boolean
    createdBy?: StringWithAggregatesFilter<"CodeChallenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CodeChallenge"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    type?: EnumTestTypeFilter<"Test"> | $Enums.TestType
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    durationMinutes?: IntFilter<"Test"> | number
    passingScore?: IntFilter<"Test"> | number
    category?: StringNullableFilter<"Test"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Test"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Test">
    isPublished?: BoolFilter<"Test"> | boolean
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    mcqs?: McqListRelationFilter
    codeChallenges?: CodeChallengeListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    passingScore?: SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mcqs?: McqOrderByRelationAggregateInput
    codeChallenges?: CodeChallengeOrderByRelationAggregateInput
    _relevance?: TestOrderByRelevanceInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    type?: EnumTestTypeFilter<"Test"> | $Enums.TestType
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    durationMinutes?: IntFilter<"Test"> | number
    passingScore?: IntFilter<"Test"> | number
    category?: StringNullableFilter<"Test"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Test"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Test">
    isPublished?: BoolFilter<"Test"> | boolean
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    mcqs?: McqListRelationFilter
    codeChallenges?: CodeChallengeListRelationFilter
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    passingScore?: SortOrder
    category?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    type?: EnumTestTypeWithAggregatesFilter<"Test"> | $Enums.TestType
    title?: StringWithAggregatesFilter<"Test"> | string
    description?: StringNullableWithAggregatesFilter<"Test"> | string | null
    durationMinutes?: IntWithAggregatesFilter<"Test"> | number
    passingScore?: IntWithAggregatesFilter<"Test"> | number
    category?: StringNullableWithAggregatesFilter<"Test"> | string | null
    difficulty?: EnumDifficultyNullableWithAggregatesFilter<"Test"> | $Enums.Difficulty | null
    tags?: JsonNullableWithAggregatesFilter<"Test">
    isPublished?: BoolWithAggregatesFilter<"Test"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type McqCreateInput = {
    id?: string
    question: string
    choices: JsonNullValueInput | InputJsonValue
    points?: number
    explanation?: string | null
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutMcqsInput
  }

  export type McqUncheckedCreateInput = {
    id?: string
    question: string
    choices: JsonNullValueInput | InputJsonValue
    points?: number
    explanation?: string | null
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutMcqsInput
  }

  export type McqUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutMcqsNestedInput
  }

  export type McqUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutMcqsNestedInput
  }

  export type McqCreateManyInput = {
    id?: string
    question: string
    choices: JsonNullValueInput | InputJsonValue
    points?: number
    explanation?: string | null
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type McqUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McqUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeCreateInput = {
    id?: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonNullValueInput | InputJsonValue
    timeLimit?: number
    memoryLimit?: number
    totalPoints?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestCreateNestedManyWithoutCodeChallengesInput
  }

  export type CodeChallengeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonNullValueInput | InputJsonValue
    timeLimit?: number
    memoryLimit?: number
    totalPoints?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tests?: TestUncheckedCreateNestedManyWithoutCodeChallengesInput
  }

  export type CodeChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUpdateManyWithoutCodeChallengesNestedInput
  }

  export type CodeChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tests?: TestUncheckedUpdateManyWithoutCodeChallengesNestedInput
  }

  export type CodeChallengeCreateManyInput = {
    id?: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonNullValueInput | InputJsonValue
    timeLimit?: number
    memoryLimit?: number
    totalPoints?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: McqCreateNestedManyWithoutTestsInput
    codeChallenges?: CodeChallengeCreateNestedManyWithoutTestsInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: McqUncheckedCreateNestedManyWithoutTestsInput
    codeChallenges?: CodeChallengeUncheckedCreateNestedManyWithoutTestsInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: McqUpdateManyWithoutTestsNestedInput
    codeChallenges?: CodeChallengeUpdateManyWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: McqUncheckedUpdateManyWithoutTestsNestedInput
    codeChallenges?: CodeChallengeUncheckedUpdateManyWithoutTestsNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableFilter<$PrismaModel> | $Enums.Difficulty | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type McqOrderByRelevanceInput = {
    fields: McqOrderByRelevanceFieldEnum | McqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type McqCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    choices?: SortOrder
    points?: SortOrder
    explanation?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type McqAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type McqMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    points?: SortOrder
    explanation?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type McqMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    points?: SortOrder
    explanation?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type McqSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CodeChallengeOrderByRelevanceInput = {
    fields: CodeChallengeOrderByRelevanceFieldEnum | CodeChallengeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CodeChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starterCode?: SortOrder
    language?: SortOrder
    testCases?: SortOrder
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
    hints?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeChallengeAvgOrderByAggregateInput = {
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
  }

  export type CodeChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starterCode?: SortOrder
    language?: SortOrder
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    starterCode?: SortOrder
    language?: SortOrder
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeChallengeSumOrderByAggregateInput = {
    timeLimit?: SortOrder
    memoryLimit?: SortOrder
    totalPoints?: SortOrder
  }

  export type EnumTestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestType | EnumTestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestType[]
    notIn?: $Enums.TestType[]
    not?: NestedEnumTestTypeFilter<$PrismaModel> | $Enums.TestType
  }

  export type McqListRelationFilter = {
    every?: McqWhereInput
    some?: McqWhereInput
    none?: McqWhereInput
  }

  export type CodeChallengeListRelationFilter = {
    every?: CodeChallengeWhereInput
    some?: CodeChallengeWhereInput
    none?: CodeChallengeWhereInput
  }

  export type McqOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestOrderByRelevanceInput = {
    fields: TestOrderByRelevanceFieldEnum | TestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    passingScore?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
    passingScore?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    passingScore?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    passingScore?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
    passingScore?: SortOrder
  }

  export type EnumTestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestType | EnumTestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestType[]
    notIn?: $Enums.TestType[]
    not?: NestedEnumTestTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestTypeFilter<$PrismaModel>
    _max?: NestedEnumTestTypeFilter<$PrismaModel>
  }

  export type TestCreateNestedManyWithoutMcqsInput = {
    create?: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput> | TestCreateWithoutMcqsInput[] | TestUncheckedCreateWithoutMcqsInput[]
    connectOrCreate?: TestCreateOrConnectWithoutMcqsInput | TestCreateOrConnectWithoutMcqsInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutMcqsInput = {
    create?: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput> | TestCreateWithoutMcqsInput[] | TestUncheckedCreateWithoutMcqsInput[]
    connectOrCreate?: TestCreateOrConnectWithoutMcqsInput | TestCreateOrConnectWithoutMcqsInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestUpdateManyWithoutMcqsNestedInput = {
    create?: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput> | TestCreateWithoutMcqsInput[] | TestUncheckedCreateWithoutMcqsInput[]
    connectOrCreate?: TestCreateOrConnectWithoutMcqsInput | TestCreateOrConnectWithoutMcqsInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutMcqsInput | TestUpsertWithWhereUniqueWithoutMcqsInput[]
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutMcqsInput | TestUpdateWithWhereUniqueWithoutMcqsInput[]
    updateMany?: TestUpdateManyWithWhereWithoutMcqsInput | TestUpdateManyWithWhereWithoutMcqsInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutMcqsNestedInput = {
    create?: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput> | TestCreateWithoutMcqsInput[] | TestUncheckedCreateWithoutMcqsInput[]
    connectOrCreate?: TestCreateOrConnectWithoutMcqsInput | TestCreateOrConnectWithoutMcqsInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutMcqsInput | TestUpsertWithWhereUniqueWithoutMcqsInput[]
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutMcqsInput | TestUpdateWithWhereUniqueWithoutMcqsInput[]
    updateMany?: TestUpdateManyWithWhereWithoutMcqsInput | TestUpdateManyWithWhereWithoutMcqsInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestCreateNestedManyWithoutCodeChallengesInput = {
    create?: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput> | TestCreateWithoutCodeChallengesInput[] | TestUncheckedCreateWithoutCodeChallengesInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCodeChallengesInput | TestCreateOrConnectWithoutCodeChallengesInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutCodeChallengesInput = {
    create?: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput> | TestCreateWithoutCodeChallengesInput[] | TestUncheckedCreateWithoutCodeChallengesInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCodeChallengesInput | TestCreateOrConnectWithoutCodeChallengesInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type TestUpdateManyWithoutCodeChallengesNestedInput = {
    create?: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput> | TestCreateWithoutCodeChallengesInput[] | TestUncheckedCreateWithoutCodeChallengesInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCodeChallengesInput | TestCreateOrConnectWithoutCodeChallengesInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCodeChallengesInput | TestUpsertWithWhereUniqueWithoutCodeChallengesInput[]
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCodeChallengesInput | TestUpdateWithWhereUniqueWithoutCodeChallengesInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCodeChallengesInput | TestUpdateManyWithWhereWithoutCodeChallengesInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutCodeChallengesNestedInput = {
    create?: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput> | TestCreateWithoutCodeChallengesInput[] | TestUncheckedCreateWithoutCodeChallengesInput[]
    connectOrCreate?: TestCreateOrConnectWithoutCodeChallengesInput | TestCreateOrConnectWithoutCodeChallengesInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutCodeChallengesInput | TestUpsertWithWhereUniqueWithoutCodeChallengesInput[]
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutCodeChallengesInput | TestUpdateWithWhereUniqueWithoutCodeChallengesInput[]
    updateMany?: TestUpdateManyWithWhereWithoutCodeChallengesInput | TestUpdateManyWithWhereWithoutCodeChallengesInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type McqCreateNestedManyWithoutTestsInput = {
    create?: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput> | McqCreateWithoutTestsInput[] | McqUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: McqCreateOrConnectWithoutTestsInput | McqCreateOrConnectWithoutTestsInput[]
    connect?: McqWhereUniqueInput | McqWhereUniqueInput[]
  }

  export type CodeChallengeCreateNestedManyWithoutTestsInput = {
    create?: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput> | CodeChallengeCreateWithoutTestsInput[] | CodeChallengeUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestsInput | CodeChallengeCreateOrConnectWithoutTestsInput[]
    connect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
  }

  export type McqUncheckedCreateNestedManyWithoutTestsInput = {
    create?: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput> | McqCreateWithoutTestsInput[] | McqUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: McqCreateOrConnectWithoutTestsInput | McqCreateOrConnectWithoutTestsInput[]
    connect?: McqWhereUniqueInput | McqWhereUniqueInput[]
  }

  export type CodeChallengeUncheckedCreateNestedManyWithoutTestsInput = {
    create?: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput> | CodeChallengeCreateWithoutTestsInput[] | CodeChallengeUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestsInput | CodeChallengeCreateOrConnectWithoutTestsInput[]
    connect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
  }

  export type EnumTestTypeFieldUpdateOperationsInput = {
    set?: $Enums.TestType
  }

  export type McqUpdateManyWithoutTestsNestedInput = {
    create?: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput> | McqCreateWithoutTestsInput[] | McqUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: McqCreateOrConnectWithoutTestsInput | McqCreateOrConnectWithoutTestsInput[]
    upsert?: McqUpsertWithWhereUniqueWithoutTestsInput | McqUpsertWithWhereUniqueWithoutTestsInput[]
    set?: McqWhereUniqueInput | McqWhereUniqueInput[]
    disconnect?: McqWhereUniqueInput | McqWhereUniqueInput[]
    delete?: McqWhereUniqueInput | McqWhereUniqueInput[]
    connect?: McqWhereUniqueInput | McqWhereUniqueInput[]
    update?: McqUpdateWithWhereUniqueWithoutTestsInput | McqUpdateWithWhereUniqueWithoutTestsInput[]
    updateMany?: McqUpdateManyWithWhereWithoutTestsInput | McqUpdateManyWithWhereWithoutTestsInput[]
    deleteMany?: McqScalarWhereInput | McqScalarWhereInput[]
  }

  export type CodeChallengeUpdateManyWithoutTestsNestedInput = {
    create?: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput> | CodeChallengeCreateWithoutTestsInput[] | CodeChallengeUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestsInput | CodeChallengeCreateOrConnectWithoutTestsInput[]
    upsert?: CodeChallengeUpsertWithWhereUniqueWithoutTestsInput | CodeChallengeUpsertWithWhereUniqueWithoutTestsInput[]
    set?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    disconnect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    delete?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    connect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    update?: CodeChallengeUpdateWithWhereUniqueWithoutTestsInput | CodeChallengeUpdateWithWhereUniqueWithoutTestsInput[]
    updateMany?: CodeChallengeUpdateManyWithWhereWithoutTestsInput | CodeChallengeUpdateManyWithWhereWithoutTestsInput[]
    deleteMany?: CodeChallengeScalarWhereInput | CodeChallengeScalarWhereInput[]
  }

  export type McqUncheckedUpdateManyWithoutTestsNestedInput = {
    create?: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput> | McqCreateWithoutTestsInput[] | McqUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: McqCreateOrConnectWithoutTestsInput | McqCreateOrConnectWithoutTestsInput[]
    upsert?: McqUpsertWithWhereUniqueWithoutTestsInput | McqUpsertWithWhereUniqueWithoutTestsInput[]
    set?: McqWhereUniqueInput | McqWhereUniqueInput[]
    disconnect?: McqWhereUniqueInput | McqWhereUniqueInput[]
    delete?: McqWhereUniqueInput | McqWhereUniqueInput[]
    connect?: McqWhereUniqueInput | McqWhereUniqueInput[]
    update?: McqUpdateWithWhereUniqueWithoutTestsInput | McqUpdateWithWhereUniqueWithoutTestsInput[]
    updateMany?: McqUpdateManyWithWhereWithoutTestsInput | McqUpdateManyWithWhereWithoutTestsInput[]
    deleteMany?: McqScalarWhereInput | McqScalarWhereInput[]
  }

  export type CodeChallengeUncheckedUpdateManyWithoutTestsNestedInput = {
    create?: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput> | CodeChallengeCreateWithoutTestsInput[] | CodeChallengeUncheckedCreateWithoutTestsInput[]
    connectOrCreate?: CodeChallengeCreateOrConnectWithoutTestsInput | CodeChallengeCreateOrConnectWithoutTestsInput[]
    upsert?: CodeChallengeUpsertWithWhereUniqueWithoutTestsInput | CodeChallengeUpsertWithWhereUniqueWithoutTestsInput[]
    set?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    disconnect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    delete?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    connect?: CodeChallengeWhereUniqueInput | CodeChallengeWhereUniqueInput[]
    update?: CodeChallengeUpdateWithWhereUniqueWithoutTestsInput | CodeChallengeUpdateWithWhereUniqueWithoutTestsInput[]
    updateMany?: CodeChallengeUpdateManyWithWhereWithoutTestsInput | CodeChallengeUpdateManyWithWhereWithoutTestsInput[]
    deleteMany?: CodeChallengeScalarWhereInput | CodeChallengeScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableFilter<$PrismaModel> | $Enums.Difficulty | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.Difficulty[] | null
    notIn?: $Enums.Difficulty[] | null
    not?: NestedEnumDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestType | EnumTestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestType[]
    notIn?: $Enums.TestType[]
    not?: NestedEnumTestTypeFilter<$PrismaModel> | $Enums.TestType
  }

  export type NestedEnumTestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestType | EnumTestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TestType[]
    notIn?: $Enums.TestType[]
    not?: NestedEnumTestTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestTypeFilter<$PrismaModel>
    _max?: NestedEnumTestTypeFilter<$PrismaModel>
  }

  export type TestCreateWithoutMcqsInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChallenges?: CodeChallengeCreateNestedManyWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutMcqsInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChallenges?: CodeChallengeUncheckedCreateNestedManyWithoutTestsInput
  }

  export type TestCreateOrConnectWithoutMcqsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput>
  }

  export type TestUpsertWithWhereUniqueWithoutMcqsInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutMcqsInput, TestUncheckedUpdateWithoutMcqsInput>
    create: XOR<TestCreateWithoutMcqsInput, TestUncheckedCreateWithoutMcqsInput>
  }

  export type TestUpdateWithWhereUniqueWithoutMcqsInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutMcqsInput, TestUncheckedUpdateWithoutMcqsInput>
  }

  export type TestUpdateManyWithWhereWithoutMcqsInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutMcqsInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    id?: StringFilter<"Test"> | string
    type?: EnumTestTypeFilter<"Test"> | $Enums.TestType
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    durationMinutes?: IntFilter<"Test"> | number
    passingScore?: IntFilter<"Test"> | number
    category?: StringNullableFilter<"Test"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Test"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Test">
    isPublished?: BoolFilter<"Test"> | boolean
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type TestCreateWithoutCodeChallengesInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: McqCreateNestedManyWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutCodeChallengesInput = {
    id?: string
    type: $Enums.TestType
    title: string
    description?: string | null
    durationMinutes: number
    passingScore?: number
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: McqUncheckedCreateNestedManyWithoutTestsInput
  }

  export type TestCreateOrConnectWithoutCodeChallengesInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput>
  }

  export type TestUpsertWithWhereUniqueWithoutCodeChallengesInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutCodeChallengesInput, TestUncheckedUpdateWithoutCodeChallengesInput>
    create: XOR<TestCreateWithoutCodeChallengesInput, TestUncheckedCreateWithoutCodeChallengesInput>
  }

  export type TestUpdateWithWhereUniqueWithoutCodeChallengesInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutCodeChallengesInput, TestUncheckedUpdateWithoutCodeChallengesInput>
  }

  export type TestUpdateManyWithWhereWithoutCodeChallengesInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutCodeChallengesInput>
  }

  export type McqCreateWithoutTestsInput = {
    id?: string
    question: string
    choices: JsonNullValueInput | InputJsonValue
    points?: number
    explanation?: string | null
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type McqUncheckedCreateWithoutTestsInput = {
    id?: string
    question: string
    choices: JsonNullValueInput | InputJsonValue
    points?: number
    explanation?: string | null
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type McqCreateOrConnectWithoutTestsInput = {
    where: McqWhereUniqueInput
    create: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput>
  }

  export type CodeChallengeCreateWithoutTestsInput = {
    id?: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonNullValueInput | InputJsonValue
    timeLimit?: number
    memoryLimit?: number
    totalPoints?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeUncheckedCreateWithoutTestsInput = {
    id?: string
    title: string
    description: string
    starterCode: string
    language: string
    testCases: JsonNullValueInput | InputJsonValue
    timeLimit?: number
    memoryLimit?: number
    totalPoints?: number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: string | null
    difficulty?: $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeChallengeCreateOrConnectWithoutTestsInput = {
    where: CodeChallengeWhereUniqueInput
    create: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput>
  }

  export type McqUpsertWithWhereUniqueWithoutTestsInput = {
    where: McqWhereUniqueInput
    update: XOR<McqUpdateWithoutTestsInput, McqUncheckedUpdateWithoutTestsInput>
    create: XOR<McqCreateWithoutTestsInput, McqUncheckedCreateWithoutTestsInput>
  }

  export type McqUpdateWithWhereUniqueWithoutTestsInput = {
    where: McqWhereUniqueInput
    data: XOR<McqUpdateWithoutTestsInput, McqUncheckedUpdateWithoutTestsInput>
  }

  export type McqUpdateManyWithWhereWithoutTestsInput = {
    where: McqScalarWhereInput
    data: XOR<McqUpdateManyMutationInput, McqUncheckedUpdateManyWithoutTestsInput>
  }

  export type McqScalarWhereInput = {
    AND?: McqScalarWhereInput | McqScalarWhereInput[]
    OR?: McqScalarWhereInput[]
    NOT?: McqScalarWhereInput | McqScalarWhereInput[]
    id?: StringFilter<"Mcq"> | string
    question?: StringFilter<"Mcq"> | string
    choices?: JsonFilter<"Mcq">
    points?: IntFilter<"Mcq"> | number
    explanation?: StringNullableFilter<"Mcq"> | string | null
    category?: StringNullableFilter<"Mcq"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"Mcq"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"Mcq">
    isPublished?: BoolFilter<"Mcq"> | boolean
    createdAt?: DateTimeFilter<"Mcq"> | Date | string
    updatedAt?: DateTimeFilter<"Mcq"> | Date | string
  }

  export type CodeChallengeUpsertWithWhereUniqueWithoutTestsInput = {
    where: CodeChallengeWhereUniqueInput
    update: XOR<CodeChallengeUpdateWithoutTestsInput, CodeChallengeUncheckedUpdateWithoutTestsInput>
    create: XOR<CodeChallengeCreateWithoutTestsInput, CodeChallengeUncheckedCreateWithoutTestsInput>
  }

  export type CodeChallengeUpdateWithWhereUniqueWithoutTestsInput = {
    where: CodeChallengeWhereUniqueInput
    data: XOR<CodeChallengeUpdateWithoutTestsInput, CodeChallengeUncheckedUpdateWithoutTestsInput>
  }

  export type CodeChallengeUpdateManyWithWhereWithoutTestsInput = {
    where: CodeChallengeScalarWhereInput
    data: XOR<CodeChallengeUpdateManyMutationInput, CodeChallengeUncheckedUpdateManyWithoutTestsInput>
  }

  export type CodeChallengeScalarWhereInput = {
    AND?: CodeChallengeScalarWhereInput | CodeChallengeScalarWhereInput[]
    OR?: CodeChallengeScalarWhereInput[]
    NOT?: CodeChallengeScalarWhereInput | CodeChallengeScalarWhereInput[]
    id?: StringFilter<"CodeChallenge"> | string
    title?: StringFilter<"CodeChallenge"> | string
    description?: StringFilter<"CodeChallenge"> | string
    starterCode?: StringFilter<"CodeChallenge"> | string
    language?: StringFilter<"CodeChallenge"> | string
    testCases?: JsonFilter<"CodeChallenge">
    timeLimit?: IntFilter<"CodeChallenge"> | number
    memoryLimit?: IntFilter<"CodeChallenge"> | number
    totalPoints?: IntFilter<"CodeChallenge"> | number
    hints?: JsonNullableFilter<"CodeChallenge">
    category?: StringNullableFilter<"CodeChallenge"> | string | null
    difficulty?: EnumDifficultyNullableFilter<"CodeChallenge"> | $Enums.Difficulty | null
    tags?: JsonNullableFilter<"CodeChallenge">
    isPublished?: BoolFilter<"CodeChallenge"> | boolean
    createdBy?: StringFilter<"CodeChallenge"> | string
    createdAt?: DateTimeFilter<"CodeChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CodeChallenge"> | Date | string
  }

  export type TestUpdateWithoutMcqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChallenges?: CodeChallengeUpdateManyWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutMcqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChallenges?: CodeChallengeUncheckedUpdateManyWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateManyWithoutMcqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpdateWithoutCodeChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: McqUpdateManyWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutCodeChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: McqUncheckedUpdateManyWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateManyWithoutCodeChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTestTypeFieldUpdateOperationsInput | $Enums.TestType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    passingScore?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McqUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McqUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McqUncheckedUpdateManyWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    choices?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeChallengeUncheckedUpdateManyWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    starterCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    testCases?: JsonNullValueInput | InputJsonValue
    timeLimit?: IntFieldUpdateOperationsInput | number
    memoryLimit?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    hints?: NullableJsonNullValueInput | InputJsonValue
    category?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableEnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
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