package access.com.mvc;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

/**
 * This class echoes a string called from JavaScript.
 */
public class mvc extends CordovaPlugin {
    private final static String MISSION = "我々は、ソフトウェアを人々の身近な存在にし、世界に新しい日常を提供し続けます。";
    private final static String VISION = "自らの技術力と人間力で 「あらゆる機器・サービス・人」をつなげ、ユーザ・業界・地域の課題を解き続けるイノベーションソフトウェア会社となる。";
    private final static HashMap<String, String> CORE_VALUES = new HashMap<String, String>();
    static {
        CORE_VALUES.put("UserFirst", "ユーザのことを一番に考え、期待を超える");
        CORE_VALUES.put("ThinkBig", "大胆に構想し、出来ない理由ではなく可能にする手段を考える");
        CORE_VALUES.put("Challenge", "チャンスを逃さず、挑戦することをためらわない");
        CORE_VALUES.put("Commitment", "プロのビジネスパーソンとして妥協せず、継続して最後までやりきる");
        CORE_VALUES.put("Professionalism", "得意分野を作り出し、専門性で尖り続ける");
        CORE_VALUES.put("Collaboration", "ひとりひとりに敬意を払い、互いの英知を結集する");
        CORE_VALUES.put("DeliverWOW", "ワクワクを作ってワクワクを提供する");
        CORE_VALUES.put("Simplicity", "合理性を重んじ、ものごとをシンプルに進める");
        CORE_VALUES.put("Evolution", "現状に満足することなく変革し続ける");
        CORE_VALUES.put("Frugality", "コストを意識し、常に創意工夫を心がける");
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("fetchMission")) {
            this.fetchMission(callbackContext);
            return true;
        } else if (action.equals("fetchVision")) {
            this.fetchVision(callbackContext);
            return true;
        } else if (action.equals("fetchCoreValues")) {
            this.fetchCoreValues(callbackContext);
            return true;
        }
        return false;
    }

    private void fetchMission(CallbackContext callbackContext) {
        callbackContext.success(MISSION);
    }

    private void fetchVision(CallbackContext callbackContext) {
        callbackContext.success(VISION);
    }

    private void fetchCoreValues(CallbackContext callbackContext) {
        JSONArray values = new JSONArray();
        for (String value : CORE_VALUES.values()) {
            values.put(value);
        }
        callbackContext.success(values);
    }
}

