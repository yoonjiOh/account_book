import {
  QueryClient,
  DefaultOptions,
} from "@tanstack/react-query";


/**
 * 1. refetchOnWindowFocus: true
 * default 설정이 true 이지만 명확히 하기 위해 추가하였습니다.
 * 해당 어플리케이션은 모바일에서 대부분 사용하기 때문에, 앱이 백그라운드에 있다가 다시 켜지는 경우가 많을 것으로 예상됩니다.
 * 이 경우, refetchOnWindowFocus: true 설정을 통해 백그라운드에서 다시 포커싱 될 때마다 쿼리를 다시 요청합니다.
 *
 * 2. retry: false
 * retry 는 query 가 실패했을 때, 자동으로 재시도를 하는 옵션입니다.
 * 서버에서 에러가 발생하면 서버가 부하가 걸려서 Timeout 이 발생하는 경우 외에는
 * retry 를 하지 않는 것이 좋다고 생각합니다.
 * 에러가 발생했음을 유저에게 명확히 전달하고, 유저가 직접 재시도를 할 수 있도록 하는 것이 서비스 기능을 명확히 전달하는데 도움이 될 것이라고 생각합니다.
 */
const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: true,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
