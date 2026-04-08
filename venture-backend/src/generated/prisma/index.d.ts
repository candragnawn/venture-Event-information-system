
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Favourite
 * 
 */
export type Favourite = $Result.DefaultSelection<Prisma.$FavouritePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ORGANIZER: 'ORGANIZER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Category: {
  CONCERT: 'CONCERT',
  SPORT: 'SPORT',
  WORKSHOP: 'WORKSHOP',
  SEMINAR: 'SEMINAR',
  OTHER: 'OTHER'
};

export type Category = (typeof Category)[keyof typeof Category]


export const TicketStatus: {
  VALID: 'VALID',
  USED: 'USED',
  EXPIRED: 'EXPIRED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const ordertStatus: {
  VALID: 'VALID',
  USED: 'USED',
  EXPIRED: 'EXPIRED'
};

export type ordertStatus = (typeof ordertStatus)[keyof typeof ordertStatus]


export const payment_stats: {
  pending: 'pending',
  success: 'success',
  failed: 'failed',
  canceled: 'canceled'
};

export type payment_stats = (typeof payment_stats)[keyof typeof payment_stats]


export const PaymentMethod: {
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT_CARD: 'CREDIT_CARD',
  E_WALLET: 'E_WALLET',
  CASH: 'CASH'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type ordertStatus = $Enums.ordertStatus

export const ordertStatus: typeof $Enums.ordertStatus

export type payment_stats = $Enums.payment_stats

export const payment_stats: typeof $Enums.payment_stats

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourite`: Exposes CRUD operations for the **Favourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourite.findMany()
    * ```
    */
  get favourite(): Prisma.FavouriteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    User: 'User',
    Event: 'Event',
    Ticket: 'Ticket',
    Orders: 'Orders',
    Payments: 'Payments',
    Reviews: 'Reviews',
    Favourite: 'Favourite'
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
      modelProps: "user" | "event" | "ticket" | "orders" | "payments" | "reviews" | "favourite"
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Favourite: {
        payload: Prisma.$FavouritePayload<ExtArgs>
        fields: Prisma.FavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findFirst: {
            args: Prisma.FavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findMany: {
            args: Prisma.FavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          create: {
            args: Prisma.FavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          createMany: {
            args: Prisma.FavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          delete: {
            args: Prisma.FavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          update: {
            args: Prisma.FavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          deleteMany: {
            args: Prisma.FavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          upsert: {
            args: Prisma.FavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          aggregate: {
            args: Prisma.FavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourite>
          }
          groupBy: {
            args: Prisma.FavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteCountAggregateOutputType> | number
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
    user?: UserOmit
    event?: EventOmit
    ticket?: TicketOmit
    orders?: OrdersOmit
    payments?: PaymentsOmit
    reviews?: ReviewsOmit
    favourite?: FavouriteOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Event: number
    ticket: number
    order: number
    payment: number
    reviews: number
    favourite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | UserCountOutputTypeCountEventArgs
    ticket?: boolean | UserCountOutputTypeCountTicketArgs
    order?: boolean | UserCountOutputTypeCountOrderArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    favourite?: boolean | UserCountOutputTypeCountFavouriteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticket: number
    review: number
    favourite: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | EventCountOutputTypeCountTicketArgs
    review?: boolean | EventCountOutputTypeCountReviewArgs
    favourite?: boolean | EventCountOutputTypeCountFavouriteArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFavouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    payment: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | OrdersCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
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
    password: string | null
    name: string | null
    role: $Enums.Role | null
    phone: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    phone: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    phone: number
    created_at: number
    update_at: number
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
    password?: true
    name?: true
    role?: true
    phone?: true
    created_at?: true
    update_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    phone?: true
    created_at?: true
    update_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    phone?: true
    created_at?: true
    update_at?: true
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
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at: Date
    update_at: Date
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
    password?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    created_at?: boolean
    update_at?: boolean
    Event?: boolean | User$EventArgs<ExtArgs>
    ticket?: boolean | User$ticketArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favourite?: boolean | User$favouriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    created_at?: boolean
    update_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "phone" | "created_at" | "update_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | User$EventArgs<ExtArgs>
    ticket?: boolean | User$ticketArgs<ExtArgs>
    order?: boolean | User$orderArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favourite?: boolean | User$favouriteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>[]
      order: Prisma.$OrdersPayload<ExtArgs>[]
      payment: Prisma.$PaymentsPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      favourite: Prisma.$FavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
      phone: string
      created_at: Date
      update_at: Date
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
    Event<T extends User$EventArgs<ExtArgs> = {}>(args?: Subset<T, User$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends User$ticketArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends User$orderArgs<ExtArgs> = {}>(args?: Subset<T, User$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourite<T extends User$favouriteArgs<ExtArgs> = {}>(args?: Subset<T, User$favouriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly update_at: FieldRef<"User", 'DateTime'>
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
   * User.Event
   */
  export type User$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.ticket
   */
  export type User$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.order
   */
  export type User$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.favourite
   */
  export type User$favouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quota: number | null
    organizer_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    quota: number | null
    organizer_id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    location: string | null
    Event_date: Date | null
    Event_time: string | null
    price: Decimal | null
    quota: number | null
    image_url: string | null
    organizer_id: number | null
    updated_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: $Enums.Category | null
    location: string | null
    Event_date: Date | null
    Event_time: string | null
    price: Decimal | null
    quota: number | null
    image_url: string | null
    organizer_id: number | null
    updated_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    location: number
    Event_date: number
    Event_time: number
    price: number
    quota: number
    image_url: number
    organizer_id: number
    updated_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    price?: true
    quota?: true
    organizer_id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    price?: true
    quota?: true
    organizer_id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    Event_date?: true
    Event_time?: true
    price?: true
    quota?: true
    image_url?: true
    organizer_id?: true
    updated_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    Event_date?: true
    Event_time?: true
    price?: true
    quota?: true
    image_url?: true
    organizer_id?: true
    updated_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    Event_date?: true
    Event_time?: true
    price?: true
    quota?: true
    image_url?: true
    organizer_id?: true
    updated_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date
    Event_time: string
    price: Decimal
    quota: number
    image_url: string | null
    organizer_id: number
    updated_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    Event_date?: boolean
    Event_time?: boolean
    price?: boolean
    quota?: boolean
    image_url?: boolean
    organizer_id?: boolean
    updated_at?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    review?: boolean | Event$reviewArgs<ExtArgs>
    favourite?: boolean | Event$favouriteArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    Event_date?: boolean
    Event_time?: boolean
    price?: boolean
    quota?: boolean
    image_url?: boolean
    organizer_id?: boolean
    updated_at?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    Event_date?: boolean
    Event_time?: boolean
    price?: boolean
    quota?: boolean
    image_url?: boolean
    organizer_id?: boolean
    updated_at?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    Event_date?: boolean
    Event_time?: boolean
    price?: boolean
    quota?: boolean
    image_url?: boolean
    organizer_id?: boolean
    updated_at?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "location" | "Event_date" | "Event_time" | "price" | "quota" | "image_url" | "organizer_id" | "updated_at", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticket?: boolean | Event$ticketArgs<ExtArgs>
    review?: boolean | Event$reviewArgs<ExtArgs>
    favourite?: boolean | Event$favouriteArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>[]
      review: Prisma.$ReviewsPayload<ExtArgs>[]
      favourite: Prisma.$FavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      category: $Enums.Category
      location: string
      Event_date: Date
      Event_time: string
      price: Prisma.Decimal
      quota: number
      image_url: string | null
      organizer_id: number
      updated_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends Event$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends Event$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourite<T extends Event$favouriteArgs<ExtArgs> = {}>(args?: Subset<T, Event$favouriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'Category'>
    readonly location: FieldRef<"Event", 'String'>
    readonly Event_date: FieldRef<"Event", 'DateTime'>
    readonly Event_time: FieldRef<"Event", 'String'>
    readonly price: FieldRef<"Event", 'Decimal'>
    readonly quota: FieldRef<"Event", 'Int'>
    readonly image_url: FieldRef<"Event", 'String'>
    readonly organizer_id: FieldRef<"Event", 'Int'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.ticket
   */
  export type Event$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.review
   */
  export type Event$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Event.favourite
   */
  export type Event$favouriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    price: Decimal | null
    Event_id: number | null
    user_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    price: Decimal | null
    Event_id: number | null
    user_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    ticket_id: string | null
    qr_code: string | null
    status: $Enums.TicketStatus | null
    purchase_date: Date | null
    price: Decimal | null
    Event_id: number | null
    user_id: number | null
  }

  export type TicketMaxAggregateOutputType = {
    ticket_id: string | null
    qr_code: string | null
    status: $Enums.TicketStatus | null
    purchase_date: Date | null
    price: Decimal | null
    Event_id: number | null
    user_id: number | null
  }

  export type TicketCountAggregateOutputType = {
    ticket_id: number
    qr_code: number
    status: number
    purchase_date: number
    price: number
    Event_id: number
    user_id: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    price?: true
    Event_id?: true
    user_id?: true
  }

  export type TicketSumAggregateInputType = {
    price?: true
    Event_id?: true
    user_id?: true
  }

  export type TicketMinAggregateInputType = {
    ticket_id?: true
    qr_code?: true
    status?: true
    purchase_date?: true
    price?: true
    Event_id?: true
    user_id?: true
  }

  export type TicketMaxAggregateInputType = {
    ticket_id?: true
    qr_code?: true
    status?: true
    purchase_date?: true
    price?: true
    Event_id?: true
    user_id?: true
  }

  export type TicketCountAggregateInputType = {
    ticket_id?: true
    qr_code?: true
    status?: true
    purchase_date?: true
    price?: true
    Event_id?: true
    user_id?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    ticket_id: string
    qr_code: string
    status: $Enums.TicketStatus
    purchase_date: Date
    price: Decimal
    Event_id: number
    user_id: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    qr_code?: boolean
    status?: boolean
    purchase_date?: boolean
    price?: boolean
    Event_id?: boolean
    user_id?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    qr_code?: boolean
    status?: boolean
    purchase_date?: boolean
    price?: boolean
    Event_id?: boolean
    user_id?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticket_id?: boolean
    qr_code?: boolean
    status?: boolean
    purchase_date?: boolean
    price?: boolean
    Event_id?: boolean
    user_id?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    ticket_id?: boolean
    qr_code?: boolean
    status?: boolean
    purchase_date?: boolean
    price?: boolean
    Event_id?: boolean
    user_id?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticket_id" | "qr_code" | "status" | "purchase_date" | "price" | "Event_id" | "user_id", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ticket_id: string
      qr_code: string
      status: $Enums.TicketStatus
      purchase_date: Date
      price: Prisma.Decimal
      Event_id: number
      user_id: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.findMany({ select: { ticket_id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.createManyAndReturn({
     *   select: { ticket_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `ticket_id`
     * const ticketWithTicket_idOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { ticket_id: true },
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly ticket_id: FieldRef<"Ticket", 'String'>
    readonly qr_code: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly purchase_date: FieldRef<"Ticket", 'DateTime'>
    readonly price: FieldRef<"Ticket", 'Decimal'>
    readonly Event_id: FieldRef<"Ticket", 'Int'>
    readonly user_id: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
    status: $Enums.ordertStatus | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: Decimal | null
    status: $Enums.ordertStatus | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    total_price: number
    status: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number
    total_price: Decimal
    status: $Enums.ordertStatus
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_price" | "status" | "created_at", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payment: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      total_price: Prisma.Decimal
      status: $Enums.ordertStatus
      created_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly user_id: FieldRef<"Orders", 'Int'>
    readonly total_price: FieldRef<"Orders", 'Decimal'>
    readonly status: FieldRef<"Orders", 'ordertStatus'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.payment
   */
  export type Orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_id: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_id: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_id: number | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    payment_status: $Enums.payment_stats | null
    transaction_time: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_id: number | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    payment_status: $Enums.payment_stats | null
    transaction_time: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    user_id: number
    order_id: number
    amount: number
    payment_method: number
    payment_status: number
    transaction_time: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    user_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    user_id?: true
    order_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    transaction_time?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    order_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    transaction_time?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    user_id?: true
    order_id?: true
    amount?: true
    payment_method?: true
    payment_status?: true
    transaction_time?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    user_id: number
    order_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_time?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    order_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_status?: boolean
    transaction_time?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "order_id" | "amount" | "payment_method" | "payment_status" | "transaction_time", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      order_id: number
      amount: number
      payment_method: $Enums.PaymentMethod
      payment_status: $Enums.payment_stats
      transaction_time: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'Int'>
    readonly user_id: FieldRef<"Payments", 'Int'>
    readonly order_id: FieldRef<"Payments", 'Int'>
    readonly amount: FieldRef<"Payments", 'Int'>
    readonly payment_method: FieldRef<"Payments", 'PaymentMethod'>
    readonly payment_status: FieldRef<"Payments", 'payment_stats'>
    readonly transaction_time: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
    rating: number | null
    comment: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    user_id: number
    Event_id: number
    rating: number
    comment: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    rating?: true
    comment?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    rating?: true
    comment?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    user_id: number
    Event_id: number
    rating: number
    comment: string
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    rating?: boolean
    comment?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "Event_id" | "rating" | "comment", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      Event_id: number
      rating: number
      comment: string
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly user_id: FieldRef<"Reviews", 'Int'>
    readonly Event_id: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Favourite
   */

  export type AggregateFavourite = {
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  export type FavouriteAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
  }

  export type FavouriteSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
  }

  export type FavouriteMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
  }

  export type FavouriteMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    Event_id: number | null
  }

  export type FavouriteCountAggregateOutputType = {
    id: number
    user_id: number
    Event_id: number
    _all: number
  }


  export type FavouriteAvgAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
  }

  export type FavouriteSumAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
  }

  export type FavouriteMinAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
  }

  export type FavouriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
  }

  export type FavouriteCountAggregateInputType = {
    id?: true
    user_id?: true
    Event_id?: true
    _all?: true
  }

  export type FavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourite to aggregate.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavouriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavouriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteMaxAggregateInputType
  }

  export type GetFavouriteAggregateType<T extends FavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourite[P]>
      : GetScalarType<T[P], AggregateFavourite[P]>
  }




  export type FavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithAggregationInput | FavouriteOrderByWithAggregationInput[]
    by: FavouriteScalarFieldEnum[] | FavouriteScalarFieldEnum
    having?: FavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteCountAggregateInputType | true
    _avg?: FavouriteAvgAggregateInputType
    _sum?: FavouriteSumAggregateInputType
    _min?: FavouriteMinAggregateInputType
    _max?: FavouriteMaxAggregateInputType
  }

  export type FavouriteGroupByOutputType = {
    id: number
    user_id: number
    Event_id: number
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  type GetFavouriteGroupByPayload<T extends FavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    Event_id?: boolean
  }

  export type FavouriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "Event_id", ExtArgs["result"]["favourite"]>
  export type FavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $FavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      Event_id: number
    }, ExtArgs["result"]["favourite"]>
    composites: {}
  }

  type FavouriteGetPayload<S extends boolean | null | undefined | FavouriteDefaultArgs> = $Result.GetResult<Prisma.$FavouritePayload, S>

  type FavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteCountAggregateInputType | true
    }

  export interface FavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourite'], meta: { name: 'Favourite' } }
    /**
     * Find zero or one Favourite that matches the filter.
     * @param {FavouriteFindUniqueArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteFindUniqueArgs>(args: SelectSubset<T, FavouriteFindUniqueArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteFindUniqueOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteFindFirstArgs>(args?: SelectSubset<T, FavouriteFindFirstArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourite.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouriteWithIdOnly = await prisma.favourite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouriteFindManyArgs>(args?: SelectSubset<T, FavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourite.
     * @param {FavouriteCreateArgs} args - Arguments to create a Favourite.
     * @example
     * // Create one Favourite
     * const Favourite = await prisma.favourite.create({
     *   data: {
     *     // ... data to create a Favourite
     *   }
     * })
     * 
     */
    create<T extends FavouriteCreateArgs>(args: SelectSubset<T, FavouriteCreateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {FavouriteCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteCreateManyArgs>(args?: SelectSubset<T, FavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {FavouriteCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `id`
     * const favouriteWithIdOnly = await prisma.favourite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favourite.
     * @param {FavouriteDeleteArgs} args - Arguments to delete one Favourite.
     * @example
     * // Delete one Favourite
     * const Favourite = await prisma.favourite.delete({
     *   where: {
     *     // ... filter to delete one Favourite
     *   }
     * })
     * 
     */
    delete<T extends FavouriteDeleteArgs>(args: SelectSubset<T, FavouriteDeleteArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourite.
     * @param {FavouriteUpdateArgs} args - Arguments to update one Favourite.
     * @example
     * // Update one Favourite
     * const favourite = await prisma.favourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteUpdateArgs>(args: SelectSubset<T, FavouriteUpdateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {FavouriteDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteDeleteManyArgs>(args?: SelectSubset<T, FavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteUpdateManyArgs>(args: SelectSubset<T, FavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites and returns the data updated in the database.
     * @param {FavouriteUpdateManyAndReturnArgs} args - Arguments to update many Favourites.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favourites and only return the `id`
     * const favouriteWithIdOnly = await prisma.favourite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavouriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favourite.
     * @param {FavouriteUpsertArgs} args - Arguments to update or create a Favourite.
     * @example
     * // Update or create a Favourite
     * const favourite = await prisma.favourite.upsert({
     *   create: {
     *     // ... data to create a Favourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourite we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteUpsertArgs>(args: SelectSubset<T, FavouriteUpsertArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourite.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouriteCountArgs>(
      args?: Subset<T, FavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouriteAggregateArgs>(args: Subset<T, FavouriteAggregateArgs>): Prisma.PrismaPromise<GetFavouriteAggregateType<T>>

    /**
     * Group by Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteGroupByArgs} args - Group by arguments.
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
      T extends FavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourite model
   */
  readonly fields: FavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favourite model
   */
  interface FavouriteFieldRefs {
    readonly id: FieldRef<"Favourite", 'Int'>
    readonly user_id: FieldRef<"Favourite", 'Int'>
    readonly Event_id: FieldRef<"Favourite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favourite findUnique
   */
  export type FavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findUniqueOrThrow
   */
  export type FavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findFirst
   */
  export type FavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findFirstOrThrow
   */
  export type FavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findMany
   */
  export type FavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite create
   */
  export type FavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourite.
     */
    data: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
  }

  /**
   * Favourite createMany
   */
  export type FavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favourite createManyAndReturn
   */
  export type FavouriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite update
   */
  export type FavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourite.
     */
    data: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
    /**
     * Choose, which Favourite to update.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite updateMany
   */
  export type FavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
  }

  /**
   * Favourite updateManyAndReturn
   */
  export type FavouriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite upsert
   */
  export type FavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourite to update in case it exists.
     */
    where: FavouriteWhereUniqueInput
    /**
     * In case the Favourite found by the `where` argument doesn't exist, create a new Favourite with this data.
     */
    create: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
    /**
     * In case the Favourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
  }

  /**
   * Favourite delete
   */
  export type FavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter which Favourite to delete.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite deleteMany
   */
  export type FavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to delete.
     */
    limit?: number
  }

  /**
   * Favourite without action
   */
  export type FavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    role: 'role',
    phone: 'phone',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    location: 'location',
    Event_date: 'Event_date',
    Event_time: 'Event_time',
    price: 'price',
    quota: 'quota',
    image_url: 'image_url',
    organizer_id: 'organizer_id',
    updated_at: 'updated_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    ticket_id: 'ticket_id',
    qr_code: 'qr_code',
    status: 'status',
    purchase_date: 'purchase_date',
    price: 'price',
    Event_id: 'Event_id',
    user_id: 'user_id'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_price: 'total_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    order_id: 'order_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    transaction_time: 'transaction_time'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    Event_id: 'Event_id',
    rating: 'rating',
    comment: 'comment'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const FavouriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    Event_id: 'Event_id'
  };

  export type FavouriteScalarFieldEnum = (typeof FavouriteScalarFieldEnum)[keyof typeof FavouriteScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'ordertStatus'
   */
  export type EnumordertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ordertStatus'>
    


  /**
   * Reference to a field of type 'ordertStatus[]'
   */
  export type ListEnumordertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ordertStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'payment_stats'
   */
  export type Enumpayment_statsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_stats'>
    


  /**
   * Reference to a field of type 'payment_stats[]'
   */
  export type ListEnumpayment_statsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_stats[]'>
    


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
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    ticket?: TicketListRelationFilter
    order?: OrdersListRelationFilter
    payment?: PaymentsListRelationFilter
    reviews?: ReviewsListRelationFilter
    favourite?: FavouriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    Event?: EventOrderByRelationAggregateInput
    ticket?: TicketOrderByRelationAggregateInput
    order?: OrdersOrderByRelationAggregateInput
    payment?: PaymentsOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    favourite?: FavouriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    ticket?: TicketListRelationFilter
    order?: OrdersListRelationFilter
    payment?: PaymentsListRelationFilter
    reviews?: ReviewsListRelationFilter
    favourite?: FavouriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: StringFilter<"Event"> | string
    Event_date?: DateTimeFilter<"Event"> | Date | string
    Event_time?: StringFilter<"Event"> | string
    price?: DecimalFilter<"Event"> | Decimal | DecimalJsLike | number | string
    quota?: IntFilter<"Event"> | number
    image_url?: StringNullableFilter<"Event"> | string | null
    organizer_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket?: TicketListRelationFilter
    review?: ReviewsListRelationFilter
    favourite?: FavouriteListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    Event_date?: SortOrder
    Event_time?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    image_url?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    updated_at?: SortOrder
    organizer?: UserOrderByWithRelationInput
    ticket?: TicketOrderByRelationAggregateInput
    review?: ReviewsOrderByRelationAggregateInput
    favourite?: FavouriteOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: StringFilter<"Event"> | string
    Event_date?: DateTimeFilter<"Event"> | Date | string
    Event_time?: StringFilter<"Event"> | string
    price?: DecimalFilter<"Event"> | Decimal | DecimalJsLike | number | string
    quota?: IntFilter<"Event"> | number
    image_url?: StringNullableFilter<"Event"> | string | null
    organizer_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket?: TicketListRelationFilter
    review?: ReviewsListRelationFilter
    favourite?: FavouriteListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    Event_date?: SortOrder
    Event_time?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    image_url?: SortOrderInput | SortOrder
    organizer_id?: SortOrder
    updated_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: EnumCategoryWithAggregatesFilter<"Event"> | $Enums.Category
    location?: StringWithAggregatesFilter<"Event"> | string
    Event_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    Event_time?: StringWithAggregatesFilter<"Event"> | string
    price?: DecimalWithAggregatesFilter<"Event"> | Decimal | DecimalJsLike | number | string
    quota?: IntWithAggregatesFilter<"Event"> | number
    image_url?: StringNullableWithAggregatesFilter<"Event"> | string | null
    organizer_id?: IntWithAggregatesFilter<"Event"> | number
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    ticket_id?: StringFilter<"Ticket"> | string
    qr_code?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    purchase_date?: DateTimeFilter<"Ticket"> | Date | string
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    Event_id?: IntFilter<"Ticket"> | number
    user_id?: IntFilter<"Ticket"> | number
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    ticket_id?: SortOrder
    qr_code?: SortOrder
    status?: SortOrder
    purchase_date?: SortOrder
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
    Event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: string
    qr_code?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    purchase_date?: DateTimeFilter<"Ticket"> | Date | string
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    Event_id?: IntFilter<"Ticket"> | number
    user_id?: IntFilter<"Ticket"> | number
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "ticket_id" | "qr_code">

  export type TicketOrderByWithAggregationInput = {
    ticket_id?: SortOrder
    qr_code?: SortOrder
    status?: SortOrder
    purchase_date?: SortOrder
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    ticket_id?: StringWithAggregatesFilter<"Ticket"> | string
    qr_code?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    purchase_date?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    price?: DecimalWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    Event_id?: IntWithAggregatesFilter<"Ticket"> | number
    user_id?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFilter<"Orders"> | $Enums.ordertStatus
    created_at?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: PaymentsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    payment?: PaymentsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_id?: IntFilter<"Orders"> | number
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFilter<"Orders"> | $Enums.ordertStatus
    created_at?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: PaymentsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    user_id?: IntWithAggregatesFilter<"Orders"> | number
    total_price?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusWithAggregatesFilter<"Orders"> | $Enums.ordertStatus
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: IntFilter<"Payments"> | number
    user_id?: IntFilter<"Payments"> | number
    order_id?: IntFilter<"Payments"> | number
    amount?: IntFilter<"Payments"> | number
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFilter<"Payments"> | $Enums.payment_stats
    transaction_time?: DateTimeFilter<"Payments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_time?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    user_id?: IntFilter<"Payments"> | number
    order_id?: IntFilter<"Payments"> | number
    amount?: IntFilter<"Payments"> | number
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFilter<"Payments"> | $Enums.payment_stats
    transaction_time?: DateTimeFilter<"Payments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_time?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payments"> | number
    user_id?: IntWithAggregatesFilter<"Payments"> | number
    order_id?: IntWithAggregatesFilter<"Payments"> | number
    amount?: IntWithAggregatesFilter<"Payments"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Payments"> | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsWithAggregatesFilter<"Payments"> | $Enums.payment_stats
    transaction_time?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    Event_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    user?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    user_id?: IntFilter<"Reviews"> | number
    Event_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    user_id?: IntWithAggregatesFilter<"Reviews"> | number
    Event_id?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
  }

  export type FavouriteWhereInput = {
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    id?: IntFilter<"Favourite"> | number
    user_id?: IntFilter<"Favourite"> | number
    Event_id?: IntFilter<"Favourite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type FavouriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    user?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type FavouriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    user_id?: IntFilter<"Favourite"> | number
    Event_id?: IntFilter<"Favourite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type FavouriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    _count?: FavouriteCountOrderByAggregateInput
    _avg?: FavouriteAvgOrderByAggregateInput
    _max?: FavouriteMaxOrderByAggregateInput
    _min?: FavouriteMinOrderByAggregateInput
    _sum?: FavouriteSumOrderByAggregateInput
  }

  export type FavouriteScalarWhereWithAggregatesInput = {
    AND?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    OR?: FavouriteScalarWhereWithAggregatesInput[]
    NOT?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favourite"> | number
    user_id?: IntWithAggregatesFilter<"Favourite"> | number
    Event_id?: IntWithAggregatesFilter<"Favourite"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    ticket?: TicketCreateNestedManyWithoutUserInput
    order?: OrdersCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    organizer: UserCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    review?: ReviewsCreateNestedManyWithoutEventInput
    favourite?: FavouriteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    organizer_id: number
    updated_at?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewsUncheckedCreateNestedManyWithoutEventInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    review?: ReviewsUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    organizer_id: number
    updated_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event: EventCreateNestedOneWithoutTicketInput
    user: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event_id: number
    user_id: number
  }

  export type TicketUpdateInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event?: EventUpdateOneRequiredWithoutTicketNestedInput
    user?: UserUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event_id: number
    user_id: number
  }

  export type TicketUpdateManyMutationInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TicketUncheckedUpdateManyInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    payment?: PaymentsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    user_id: number
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
    payment?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    payment?: PaymentsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    user_id: number
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: number
    user_id: number
    order_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type PaymentsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: number
    user_id: number
    order_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsInput
    Event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    user_id: number
    Event_id: number
    rating: number
    comment: string
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    Event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    user_id: number
    Event_id: number
    rating: number
    comment: string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteCreateInput = {
    user: UserCreateNestedOneWithoutFavouriteInput
    Event: EventCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateInput = {
    id?: number
    user_id: number
    Event_id: number
  }

  export type FavouriteUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavouriteNestedInput
    Event?: EventUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteCreateManyInput = {
    id?: number
    user_id: number
    Event_id: number
  }

  export type FavouriteUpdateManyMutationInput = {

  }

  export type FavouriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type FavouriteListRelationFilter = {
    every?: FavouriteWhereInput
    some?: FavouriteWhereInput
    none?: FavouriteWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    Event_date?: SortOrder
    Event_time?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    image_url?: SortOrder
    organizer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    organizer_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    Event_date?: SortOrder
    Event_time?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    image_url?: SortOrder
    organizer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    Event_date?: SortOrder
    Event_time?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    image_url?: SortOrder
    organizer_id?: SortOrder
    updated_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quota?: SortOrder
    organizer_id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TicketCountOrderByAggregateInput = {
    ticket_id?: SortOrder
    qr_code?: SortOrder
    status?: SortOrder
    purchase_date?: SortOrder
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    ticket_id?: SortOrder
    qr_code?: SortOrder
    status?: SortOrder
    purchase_date?: SortOrder
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    ticket_id?: SortOrder
    qr_code?: SortOrder
    status?: SortOrder
    purchase_date?: SortOrder
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    price?: SortOrder
    Event_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumordertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ordertStatus | EnumordertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumordertStatusFilter<$PrismaModel> | $Enums.ordertStatus
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type EnumordertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ordertStatus | EnumordertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumordertStatusWithAggregatesFilter<$PrismaModel> | $Enums.ordertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumordertStatusFilter<$PrismaModel>
    _max?: NestedEnumordertStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type Enumpayment_statsFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_stats | Enumpayment_statsFieldRefInput<$PrismaModel>
    in?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statsFilter<$PrismaModel> | $Enums.payment_stats
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_time?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_time?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    transaction_time?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type Enumpayment_statsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_stats | Enumpayment_statsFieldRefInput<$PrismaModel>
    in?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statsWithAggregatesFilter<$PrismaModel> | $Enums.payment_stats
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statsFilter<$PrismaModel>
    _max?: NestedEnumpayment_statsFilter<$PrismaModel>
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
    rating?: SortOrder
  }

  export type FavouriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
  }

  export type FavouriteAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
  }

  export type FavouriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
  }

  export type FavouriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
  }

  export type FavouriteSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    Event_id?: SortOrder
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type PaymentsCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type FavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type PaymentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type FavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type FavouriteCreateNestedManyWithoutEventInput = {
    create?: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput> | FavouriteCreateWithoutEventInput[] | FavouriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutEventInput | FavouriteCreateOrConnectWithoutEventInput[]
    createMany?: FavouriteCreateManyEventInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput> | FavouriteCreateWithoutEventInput[] | FavouriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutEventInput | FavouriteCreateOrConnectWithoutEventInput[]
    createMany?: FavouriteCreateManyEventInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventInput, UserUpdateWithoutEventInput>, UserUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEventInput | ReviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEventInput | ReviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEventInput | ReviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type FavouriteUpdateManyWithoutEventNestedInput = {
    create?: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput> | FavouriteCreateWithoutEventInput[] | FavouriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutEventInput | FavouriteCreateOrConnectWithoutEventInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutEventInput | FavouriteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FavouriteCreateManyEventInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutEventInput | FavouriteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutEventInput | FavouriteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput> | ReviewsCreateWithoutEventInput[] | ReviewsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEventInput | ReviewsCreateOrConnectWithoutEventInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEventInput | ReviewsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewsCreateManyEventInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEventInput | ReviewsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEventInput | ReviewsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput> | FavouriteCreateWithoutEventInput[] | FavouriteUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutEventInput | FavouriteCreateOrConnectWithoutEventInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutEventInput | FavouriteUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FavouriteCreateManyEventInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutEventInput | FavouriteUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutEventInput | FavouriteUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EventUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    upsert?: UserUpsertWithoutTicketInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketInput, UserUpdateWithoutTicketInput>, UserUncheckedUpdateWithoutTicketInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type EnumordertStatusFieldUpdateOperationsInput = {
    set?: $Enums.ordertStatus
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type Enumpayment_statsFieldUpdateOperationsInput = {
    set?: $Enums.payment_stats
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    upsert?: EventUpsertWithoutReviewInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewInput, EventUpdateWithoutReviewInput>, EventUncheckedUpdateWithoutReviewInput>
  }

  export type UserCreateNestedOneWithoutFavouriteInput = {
    create?: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutFavouriteInput = {
    create?: XOR<EventCreateWithoutFavouriteInput, EventUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: EventCreateOrConnectWithoutFavouriteInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavouriteNestedInput = {
    create?: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteInput
    upsert?: UserUpsertWithoutFavouriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouriteInput, UserUpdateWithoutFavouriteInput>, UserUncheckedUpdateWithoutFavouriteInput>
  }

  export type EventUpdateOneRequiredWithoutFavouriteNestedInput = {
    create?: XOR<EventCreateWithoutFavouriteInput, EventUncheckedCreateWithoutFavouriteInput>
    connectOrCreate?: EventCreateOrConnectWithoutFavouriteInput
    upsert?: EventUpsertWithoutFavouriteInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFavouriteInput, EventUpdateWithoutFavouriteInput>, EventUncheckedUpdateWithoutFavouriteInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumordertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ordertStatus | EnumordertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumordertStatusFilter<$PrismaModel> | $Enums.ordertStatus
  }

  export type NestedEnumordertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ordertStatus | EnumordertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ordertStatus[] | ListEnumordertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumordertStatusWithAggregatesFilter<$PrismaModel> | $Enums.ordertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumordertStatusFilter<$PrismaModel>
    _max?: NestedEnumordertStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumpayment_statsFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_stats | Enumpayment_statsFieldRefInput<$PrismaModel>
    in?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statsFilter<$PrismaModel> | $Enums.payment_stats
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_stats | Enumpayment_statsFieldRefInput<$PrismaModel>
    in?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_stats[] | ListEnumpayment_statsFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statsWithAggregatesFilter<$PrismaModel> | $Enums.payment_stats
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statsFilter<$PrismaModel>
    _max?: NestedEnumpayment_statsFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    ticket?: TicketCreateNestedManyWithoutEventInput
    review?: ReviewsCreateNestedManyWithoutEventInput
    favourite?: FavouriteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewsUncheckedCreateNestedManyWithoutEventInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUserInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event_id: number
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
    payment?: PaymentsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: number
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
    payment?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsCreateWithoutUserInput = {
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateWithoutUserInput = {
    id?: number
    order_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsCreateManyUserInputEnvelope = {
    data: PaymentsCreateManyUserInput | PaymentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rating: number
    comment: string
    Event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    Event_id: number
    rating: number
    comment: string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteCreateWithoutUserInput = {
    Event: EventCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateWithoutUserInput = {
    id?: number
    Event_id: number
  }

  export type FavouriteCreateOrConnectWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteCreateManyUserInputEnvelope = {
    data: FavouriteCreateManyUserInput | FavouriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: EnumCategoryFilter<"Event"> | $Enums.Category
    location?: StringFilter<"Event"> | string
    Event_date?: DateTimeFilter<"Event"> | Date | string
    Event_time?: StringFilter<"Event"> | string
    price?: DecimalFilter<"Event"> | Decimal | DecimalJsLike | number | string
    quota?: IntFilter<"Event"> | number
    image_url?: StringNullableFilter<"Event"> | string | null
    organizer_id?: IntFilter<"Event"> | number
    updated_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    ticket_id?: StringFilter<"Ticket"> | string
    qr_code?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    purchase_date?: DateTimeFilter<"Ticket"> | Date | string
    price?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    Event_id?: IntFilter<"Ticket"> | number
    user_id?: IntFilter<"Ticket"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFilter<"Orders"> | $Enums.ordertStatus
    created_at?: DateTimeFilter<"Orders"> | Date | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutUserInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: IntFilter<"Payments"> | number
    user_id?: IntFilter<"Payments"> | number
    order_id?: IntFilter<"Payments"> | number
    amount?: IntFilter<"Payments"> | number
    payment_method?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFilter<"Payments"> | $Enums.payment_stats
    transaction_time?: DateTimeFilter<"Payments"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    Event_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
  }

  export type FavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutUserInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouriteScalarWhereInput = {
    AND?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    OR?: FavouriteScalarWhereInput[]
    NOT?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    id?: IntFilter<"Favourite"> | number
    user_id?: IntFilter<"Favourite"> | number
    Event_id?: IntFilter<"Favourite"> | number
  }

  export type UserCreateWithoutEventInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    ticket?: TicketCreateNestedManyWithoutUserInput
    order?: OrdersCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateWithoutEventInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    user_id: number
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutEventInput = {
    rating: number
    comment: string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
    rating: number
    comment: string
  }

  export type ReviewsCreateOrConnectWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput>
  }

  export type ReviewsCreateManyEventInputEnvelope = {
    data: ReviewsCreateManyEventInput | ReviewsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteCreateWithoutEventInput = {
    user: UserCreateNestedOneWithoutFavouriteInput
  }

  export type FavouriteUncheckedCreateWithoutEventInput = {
    id?: number
    user_id: number
  }

  export type FavouriteCreateOrConnectWithoutEventInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput>
  }

  export type FavouriteCreateManyEventInputEnvelope = {
    data: FavouriteCreateManyEventInput | FavouriteCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateManyWithoutUserNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutEventInput, ReviewsUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewsCreateWithoutEventInput, ReviewsUncheckedCreateWithoutEventInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutEventInput, ReviewsUncheckedUpdateWithoutEventInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutEventInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutEventInput>
  }

  export type FavouriteUpsertWithWhereUniqueWithoutEventInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutEventInput, FavouriteUncheckedUpdateWithoutEventInput>
    create: XOR<FavouriteCreateWithoutEventInput, FavouriteUncheckedCreateWithoutEventInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutEventInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutEventInput, FavouriteUncheckedUpdateWithoutEventInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutEventInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutTicketInput = {
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    organizer: UserCreateNestedOneWithoutEventInput
    review?: ReviewsCreateNestedManyWithoutEventInput
    favourite?: FavouriteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    organizer_id: number
    updated_at?: Date | string
    review?: ReviewsUncheckedCreateNestedManyWithoutEventInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type UserCreateWithoutTicketInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    order?: OrdersCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventNestedInput
    review?: ReviewsUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutTicketInput = {
    update: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateWithoutTicketInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    ticket?: TicketCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsCreateWithoutOrderInput = {
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: number
    user_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsCreateManyOrderInputEnvelope = {
    data: PaymentsCreateManyOrderInput | PaymentsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserCreateWithoutPaymentInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    ticket?: TicketCreateNestedManyWithoutUserInput
    order?: OrdersCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersCreateWithoutPaymentInput = {
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: number
    user_id: number
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    ticket?: TicketCreateNestedManyWithoutUserInput
    order?: OrdersCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    favourite?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EventCreateWithoutReviewInput = {
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    organizer: UserCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    favourite?: FavouriteCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    organizer_id: number
    updated_at?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    favourite?: FavouriteUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutReviewInput = {
    update: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateWithoutReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutFavouriteInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventCreateNestedManyWithoutOrganizerInput
    ticket?: TicketCreateNestedManyWithoutUserInput
    order?: OrdersCreateNestedManyWithoutUserInput
    payment?: PaymentsCreateNestedManyWithoutUserInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouriteInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    phone: string
    created_at?: Date | string
    update_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    order?: OrdersUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentsUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
  }

  export type EventCreateWithoutFavouriteInput = {
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
    organizer: UserCreateNestedOneWithoutEventInput
    ticket?: TicketCreateNestedManyWithoutEventInput
    review?: ReviewsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFavouriteInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    organizer_id: number
    updated_at?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    review?: ReviewsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFavouriteInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFavouriteInput, EventUncheckedCreateWithoutFavouriteInput>
  }

  export type UserUpsertWithoutFavouriteInput = {
    update: XOR<UserUpdateWithoutFavouriteInput, UserUncheckedUpdateWithoutFavouriteInput>
    create: XOR<UserCreateWithoutFavouriteInput, UserUncheckedCreateWithoutFavouriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouriteInput, UserUncheckedUpdateWithoutFavouriteInput>
  }

  export type UserUpdateWithoutFavouriteInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
    order?: OrdersUpdateManyWithoutUserNestedInput
    payment?: PaymentsUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    order?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutFavouriteInput = {
    update: XOR<EventUpdateWithoutFavouriteInput, EventUncheckedUpdateWithoutFavouriteInput>
    create: XOR<EventCreateWithoutFavouriteInput, EventUncheckedCreateWithoutFavouriteInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFavouriteInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFavouriteInput, EventUncheckedUpdateWithoutFavouriteInput>
  }

  export type EventUpdateWithoutFavouriteInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventNestedInput
    ticket?: TicketUpdateManyWithoutEventNestedInput
    review?: ReviewsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFavouriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    organizer_id?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: number
    title: string
    description: string
    category: $Enums.Category
    location: string
    Event_date: Date | string
    Event_time: string
    price?: Decimal | DecimalJsLike | number | string
    quota: number
    image_url?: string | null
    updated_at?: Date | string
  }

  export type TicketCreateManyUserInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    Event_id: number
  }

  export type OrdersCreateManyUserInput = {
    id?: number
    total_price?: Decimal | DecimalJsLike | number | string
    status: $Enums.ordertStatus
    created_at?: Date | string
  }

  export type PaymentsCreateManyUserInput = {
    id?: number
    order_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    Event_id: number
    rating: number
    comment: string
  }

  export type FavouriteCreateManyUserInput = {
    id?: number
    Event_id: number
  }

  export type EventUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateManyWithoutEventNestedInput
    review?: ReviewsUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    review?: ReviewsUncheckedUpdateManyWithoutEventNestedInput
    favourite?: FavouriteUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    location?: StringFieldUpdateOperationsInput | string
    Event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Event_time?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quota?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event?: EventUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event_id?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Event_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutUserInput = {
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumordertStatusFieldUpdateOperationsInput | $Enums.ordertStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteUpdateWithoutUserInput = {
    Event?: EventUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    Event_id?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyEventInput = {
    ticket_id?: string
    qr_code: string
    status?: $Enums.TicketStatus
    purchase_date?: Date | string
    price?: Decimal | DecimalJsLike | number | string
    user_id: number
  }

  export type ReviewsCreateManyEventInput = {
    id?: number
    user_id: number
    rating: number
    comment: string
  }

  export type FavouriteCreateManyEventInput = {
    id?: number
    user_id: number
  }

  export type TicketUpdateWithoutEventInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    ticket_id?: StringFieldUpdateOperationsInput | string
    qr_code?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutEventInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteUpdateWithoutEventInput = {
    user?: UserUpdateOneRequiredWithoutFavouriteNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsCreateManyOrderInput = {
    id?: number
    user_id: number
    amount: number
    payment_method: $Enums.PaymentMethod
    payment_status: $Enums.payment_stats
    transaction_time?: Date | string
  }

  export type PaymentsUpdateWithoutOrderInput = {
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    payment_status?: Enumpayment_statsFieldUpdateOperationsInput | $Enums.payment_stats
    transaction_time?: DateTimeFieldUpdateOperationsInput | Date | string
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