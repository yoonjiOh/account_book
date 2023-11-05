import { QueryClient, DefaultOptions } from "react-query";

/**
 * 1. refetchOnWindowFocus: false
 * refetchOnWindowFocus 는 윈도우가 포커스 되었을 때, 쿼리를 재요청하는 옵션입니다.
 * 해당 어플리케이션은 실시간으로 데이터가 변경되는 경우가 많지 않기 때문에, 윈도우 포커스가 변경되었을 때, 쿼리를 재요청하지 않도록 설정하였습니다.
 * 2. retry: false
 * retry 는 query 가 실패했을 때, 자동으로 재시도를 하는 옵션입니다.
 * 서버에서 에러가 발생하면 서버가 부하가 걸려서 Timeout 이 발생하는 경우 외에는
 * retry 를 하지 않는 것이 좋다고 생각합니다.
 * 에러가 발생했음을 유저에게 명확히 전달하고, 유저가 직접 재시도를 할 수 있도록 하는 것이 서비스 기능을 명확히 전달하는데 도움이 될 것이라고 생각합니다.
 *
 * 3. staleTime: Infinity
 * staleTime 은 쿼리의 데이터가 만료되기 전까지 캐시된 데이터를 사용하도록 하는 옵션입니다.
 * 해당 어플리케이션은 실시간으로 데이터가 변경되는 경우가 많지 않기 때문에, 캐시된 데이터를 사용하도록 설정하였습니다.
 * 만약, 실시간으로 데이터가 변경되는 경우라면, staleTime 을 0 으로 설정하여 캐시된 데이터를 사용하지 않도록 설정하는 것이 좋습니다.
 */
const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
