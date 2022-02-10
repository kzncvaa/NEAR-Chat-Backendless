<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- @formatter:off -->

    <xsl:template name="login-res">
<folder name="res">
    <folder path="userservicedemo/res/drawable"/>
    <folder path="userservicedemo/res/mipmap-hdpi"/>
    <folder path="userservicedemo/res/mipmap-mdpi"/>
    <folder path="userservicedemo/res/mipmap-xhdpi"/>
    <folder path="userservicedemo/res/mipmap-xxhdpi"/>
    <folder path="userservicedemo/res/mipmap-xxxhdpi"/>

    <folder name="values">
		<file path="userservicedemo/res/values/colors.xml"/>
		<file path="userservicedemo/res/values/dimens.xml"/>
		<file path="userservicedemo/res/values/strings.xml"/>
		<file path="userservicedemo/res/values/styles.xml"/>

		<file name="backendless_defaults.xml">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;resources&gt;
	&lt;!-- for Backendless --&gt;
	&lt;string name="backendless_AppId"&gt;<xsl:value-of select="$applicationId"/>&lt;/string&gt;
	&lt;string name="backendless_ApiKey"&gt;<xsl:value-of select="$apiKey"/>&lt;/string&gt;
	&lt;string name="backendless_ApiHost"&gt;<xsl:value-of select="$serverURL"/>&lt;/string&gt;
&lt;/resources&gt;
		</file>
	</folder>

    <folder name="layout">
        <file name="activity_main_login.xml">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;RelativeLayout
		xmlns:android="http://schemas.android.com/apk/res/android"
		xmlns:tools="http://schemas.android.com/tools"
		android:id="@+id/activity_login_with_backendless"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		tools:context=".MainLogin"&gt;

	&lt;LinearLayout
			android:orientation="vertical"
			android:layout_width="match_parent"
			android:layout_height="match_parent"&gt;

		<xsl:if test="$backendlessLogin">
		&lt;TableLayout
				android:layout_width="wrap_content"
				android:layout_height="wrap_content"
				android:stretchColumns="*"
				android:shrinkColumns="*"&gt;

			&lt;TableRow
					android:layout_width="fill_parent"
					android:layout_height="wrap_content"
					android:layout_marginBottom="4dp"
					android:gravity="center"&gt;

				&lt;TextView
						android:layout_width="wrap_content"
						android:layout_height="48dp"
						android:layout_marginRight="4dp"
						android:gravity="center_vertical|right"
						android:text="@string/login_prompt"
				/&gt;

				&lt;EditText
						android:id="@+id/identityField"
						android:layout_width="144dp"
						android:layout_height="48dp"
						android:layout_marginLeft="4dp"
						android:layout_marginRight="4dp"
						android:gravity="center_vertical"
						android:inputType="text"
				/&gt;

				&lt;TextView
						android:id="@+id/registerLink"
						android:layout_width="wrap_content"
						android:layout_height="wrap_content"
						android:layout_marginStart="8dp"
						android:layout_marginEnd="8dp"
						android:layout_gravity="center_vertical|left"
						android:clickable="true"
						android:linksClickable="false"
						android:text="@string/register_text"
						android:textColor="@android:color/holo_blue_light"
				/&gt;

			&lt;/TableRow&gt;

			&lt;TableRow
					android:layout_width="fill_parent"
					android:layout_height="wrap_content"
					android:layout_marginBottom="4dp"
					android:layout_marginTop="4dp"
					android:gravity="center"&gt;

				&lt;TextView
						android:layout_width="wrap_content"
						android:layout_height="48dp"
						android:layout_marginRight="4dp"
						android:gravity="center_vertical|right"
						android:text="@string/password_prompt"
				/&gt;

				&lt;EditText
						android:id="@+id/passwordField"
						android:layout_width="144dp"
						android:layout_height="48dp"
						android:layout_marginLeft="4dp"
						android:layout_marginRight="4dp"
						android:gravity="center_vertical"
						android:inputType="textPassword"
				/&gt;

				&lt;TextView
						android:id="@+id/restoreLink"
						android:layout_width="wrap_content"
						android:layout_height="wrap_content"
						android:layout_marginStart="8dp"
						android:layout_marginEnd="8dp"
						android:layout_gravity="center_vertical|left"
						android:clickable="true"
						android:text="@string/restore_link"
						android:textColor="@android:color/holo_blue_light"/>
				/&gt;
			&lt;/TableRow&gt;
		&lt;/TableLayout&gt;
		</xsl:if>

		&lt;LinearLayout
				android:orientation="vertical"
				android:layout_width="180dp"
				android:layout_height="wrap_content"
				android:layout_marginTop="10dp"
				android:layout_gravity="center"&gt;

			&lt;CheckBox
					android:id="@+id/rememberLoginBox"
					android:layout_width="wrap_content"
					android:layout_height="wrap_content"
					android:layout_marginTop="10dp"
					android:layout_marginBottom="10dp"
					android:layout_gravity="center_horizontal"
					android:text="@string/remember_login_text"
			/&gt;

			<xsl:if test="$backendlessLogin">
			&lt;Button
					android:id="@+id/bkndlsLoginButton"
					android:layout_width="match_parent"
					android:layout_height="wrap_content"
					android:layout_marginTop="25dp"
					android:layout_gravity="center_horizontal"
					android:text="@string/btn_LoginBackendless"
			/&gt;
			</xsl:if>

			<xsl:if test="$twitterLogin">
			&lt;Button
					android:id="@+id/loginTwitterButton"
					android:text="@string/btn_LoginTwitter"
					android:layout_width="match_parent"
					android:paddingStart="30dp"
					android:paddingEnd="5dp"
					android:layout_height="48dp"
					android:layout_marginTop="25dp"
					android:layout_gravity="center_horizontal"
					android:background="@drawable/btn_twitter_bg"
			/&gt;
			</xsl:if>

			<xsl:if test="$facebookLogin">
			&lt;com.facebook.login.widget.LoginButton
					android:id="@+id/button_FacebookLogin"
					android:text="@string/btn_LoginFacebook"
					android:layout_width="match_parent"
					android:layout_height="wrap_content"
					android:layout_gravity="center_horizontal"
					android:layout_marginTop="25dp"/&gt;
			</xsl:if>

			<xsl:if test="$googleLogin">
			&lt;com.google.android.gms.common.SignInButton
					android:id="@+id/button_googlePlusLogin"
					android:text="@string/btn_LoginGooglePlus"
					android:layout_width="match_parent"
					android:layout_height="wrap_content"
					android:layout_gravity="center_horizontal"
					android:layout_marginTop="25dp"&gt;
			&lt;/com.google.android.gms.common.SignInButton&gt;
			</xsl:if>
		&lt;/LinearLayout&gt;
	&lt;/LinearLayout&gt;
&lt;/RelativeLayout&gt;
        </file>

        <xsl:if test="$backendlessLogin">
        <file path="userservicedemo/res/layout/activity_register.xml"/>
        <file path="userservicedemo/res/layout/activity_restore_password.xml"/>
        </xsl:if>

		<file path="userservicedemo/res/layout/activity_login_result.xml"/>
    </folder>
</folder>
    </xsl:template>

</xsl:stylesheet>